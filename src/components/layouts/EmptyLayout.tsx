import React from 'react';

type PropsType = {
    children: React.ReactNode;
}

const EmptyLayout: React.FC<PropsType> = ({ children }) => {
    return (<>{children}</>);
};

export default EmptyLayout;