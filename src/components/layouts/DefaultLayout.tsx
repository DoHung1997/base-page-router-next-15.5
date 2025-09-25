import React from 'react';

type PropsType = {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<PropsType> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default DefaultLayout;