import React from 'react';

type PropsType = {
    children: React.ReactNode;
}

const PrivateLayout: React.FC<PropsType> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default PrivateLayout;