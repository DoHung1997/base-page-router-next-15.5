import {ApiResponse, LoginType} from "@/models";

export const isExpired = (time: string | number): boolean => {
    try {
        if (typeof time === 'string') {
            return Date.now() > Number(time);
        } else {
            return Date.now() > time;
        }
    } catch (err: any) {
        return true;
    }
}

export const refreshToken = async (token: string, refreshToken: string): Promise<ApiResponse<LoginType> | false> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/token/refresh`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({accessToken: token, refreshToken}),
        });

        return await response.json();
    } catch (err: any) {
        return false;
    }
}