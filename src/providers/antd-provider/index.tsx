import React from 'react';
import "@ant-design/v5-patch-for-react-19"
import {ConfigProvider} from "antd"

type PropsType = {
    children: React.ReactNode;
}

const AntdProvider: React.FC<PropsType> = ({children}) => {
    return (
        <ConfigProvider
            
        
        >
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;