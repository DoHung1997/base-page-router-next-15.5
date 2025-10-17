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
        <Content >
            {children}
        </Content>
    );
};

export default BodyContent;