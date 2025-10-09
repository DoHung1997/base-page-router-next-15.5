import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";  
import {debug, isExpired, localStorageHelper, refreshToken} from "@/helpers";
import {StorageKey} from "@/constants";
import {ApiResponse} from "@/models";
import {LoginType} from "@/models";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

// Request Interceptor
// InternalAxiosRequestConfig
const onRequest = async (config: InternalAxiosRequestConfig) => {
    const {method, url, headers} = config;
    // Set Headers Here
    // Check Authentication Here
    // Set Loading Start Here
    debug(`🚀 [HOST] ${API_URL} | [API] ${method?.toUpperCase()} ${url} | Request`);

    const token = localStorageHelper.get(StorageKey.TOKEN);
    const refresh_token = localStorageHelper.get(StorageKey.REFRESH_TOKEN);
    const expires = localStorageHelper.get(StorageKey.EXPIRES);
    const locale = localStorageHelper.get(StorageKey.LOCALE);

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    if (locale) {
        headers['Accept-Language'] = locale;
    }

    if (token && refresh_token && isExpired(expires)) {
        const response: ApiResponse<LoginType> | false = await refreshToken(token, refresh_token)
        if (response && response.result && response.succeeded ) {
            headers.Authorization = `Bearer ${response.result.token}`;

            const newExpired = Date.now() + (response.result.expiresIn ?? 0) * 1000;
            localStorageHelper.set(StorageKey.TOKEN, response.result.token ?? "");
            localStorageHelper.set(StorageKey.REFRESH_TOKEN, response.result.refreshToken ?? "");
            localStorageHelper.set(StorageKey.EXPIRES_IN, `${response.result.expiresIn}`);
            localStorageHelper.set(StorageKey.TOKEN_TYPE, response.result.tokenType ?? "");
            localStorageHelper.set(StorageKey.USER, JSON.stringify(response.result.user));
            localStorageHelper.set(StorageKey.EXPIRES, `${newExpired}`);
        } else {
            localStorageHelper.remove(StorageKey.TOKEN)
            window.location.href = `/auth/logout?redirect=${window.location.pathname}`;
        }
    }

    return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    const {method, url} = response.config;
    const {status} = response;
    // Set Loading End Here
    // Handle Response Data Here
    // Error Handling When Return Success with Error Code Here
    debug(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
    return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
        const {message} = error;
        const {method, url} = error.config as AxiosRequestConfig;
        const {status} = error.response as AxiosResponse ?? {};

        debug(
            `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`
        );

        if (status === 401) {
            // "Login required"
            // Delete Token & Go To Login Page if you required.
            // window.location.href = '/logout';
            window.location.href = `/auth/logout?redirect=${window.location.pathname}`;
        }
    } else {
        debug(`🚨 [API] | Error ${error.message}`);
    }

    return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onErrorResponse);
    instance.interceptors.response.use(onResponse, onErrorResponse);
    return instance;
};

const axiosClient = setupInterceptors(axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
}));

export default axiosClient;
export * from './axios-client';