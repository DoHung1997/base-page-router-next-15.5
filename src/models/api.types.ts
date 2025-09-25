export type ApiResponse<T> = {
    succeeded: boolean
    result?: T,
    errors?: string[]
}

export type LoginType = {
    user?: any;
    token?: string;
    refreshToken?: string;
    expires?: number;
    expiresIn?: number; 
}