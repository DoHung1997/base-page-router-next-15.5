import Cookie from 'js-cookie';

export const localStorageHelper = {
    get: (key: string) => localStorage.getItem(key),
    set: (key: string, value: string) => localStorage.setItem(key, value),
    remove: (key: string) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
}

export const sessionStorageHelper = {
    get: (key: string) => sessionStorage.getItem(key),
    set: (key: string, value: string) => sessionStorage.setItem(key, value),
    remove: (key: string) => sessionStorage.removeItem(key),
    clear: () => sessionStorage.clear(),   
}

export const cookieHelper = {
    get: (key: string) => Cookie.get(key),
    set: (key: string, value: string) => Cookie.set(key, value),
    remove: (key: string) => Cookie.remove(key),
    clear: () => {
        const cookies = Cookie.get();

        for (const key in cookies) {
            Cookie.remove(key);
        }
    },  
}