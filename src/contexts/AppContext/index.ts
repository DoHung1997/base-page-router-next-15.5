import {createContext, ReactNode, useContext} from "react";

export interface AppContextProps {
    routerLoading: boolean;
    setRouterLoading: (loading: boolean) => void;
}

export const AppContext =
    createContext<AppContextProps>({
        routerLoading: true,
        setRouterLoading: () => {}
    });

export const useAppContext = () => useContext(AppContext);