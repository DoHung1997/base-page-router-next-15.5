import React, {useState} from 'react';
import {AppContext} from "@/contexts/AppContext";

type PropsType = {
    children: React.ReactNode;
}

const AppContextProvider: React.FC<PropsType> = (props) => {
    const {children } = props;
    
    const [loading, setLoading] = useState<boolean>(false);

    const valueContext = {
        routerLoading: loading,
        setRouterLoading: setLoading,
    }
    
    return (
        <AppContext.Provider value={valueContext}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;