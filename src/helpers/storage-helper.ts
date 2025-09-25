import Cookie from 'js-cookie';

export const localStorageGet = (key: string) => {
    return localStorage.getItem(key);
}

export const localStorageSet = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const localStorageRemove = (key: string) => {
    localStorage.removeItem(key);
}

export const localStorageClear = () => {
    localStorage.clear();
}

export const sessionStorageGet = (key: string) => {
    return sessionStorage.getItem(key);
}

export const sessionStorageSet = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
}

export const sessionStorageRemove = (key: string) => {
    sessionStorage.removeItem(key);
}

export const sessionStorageClear = () => {
    sessionStorage.clear();
}

export const cookieGet = (key: string) => {
    return Cookie.get(key);
}

export const cookieSet = (key: string, value: string) => {
    Cookie.set(key, value);
}

export const cookieRemove = (key: string) => {
    Cookie.remove(key);
}   

export const cookieClear = () => {
    const cookies = Cookie.get();
    
    for (const key in cookies) {
        Cookie.remove(key);
    }
}