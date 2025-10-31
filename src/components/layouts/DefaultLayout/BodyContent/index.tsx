import React from 'react';
import { Layout } from 'antd';

import styles from './BodyContent.module.scss'

const { Content } = Layout;

type PropsType = {
    children: React.ReactNode;
}

const BodyContent: React.FC<PropsType> = (props) => {
    const {children} = props;
    
    return (
        <Content className={"w-full h-full p-2 bg-white"}>
            <div className={"w-full h-full bg-gray-100 rounded-2xl shadow-xl/20 inset-shadow-sm"}>
                {children}
            </div>
        </Content>
    );
};

export default BodyContent;