import React from 'react';

type PropsType = {
    children: React.ReactNode;
}

const AntdProvider: React.FC<PropsType> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default AntdProvider;