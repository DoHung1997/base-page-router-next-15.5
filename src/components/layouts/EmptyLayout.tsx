import React from 'react';
import RouterLoading from "@/components/Loading/RouterLoading";

type PropsType = {
    children: React.ReactNode;
}

const EmptyLayout: React.FC<PropsType> = ({ children }) => {
    return (
        <>
            <RouterLoading />
            {children}
        </>
    );
};

export default EmptyLayout;