import React from 'react';
import { Layout } from 'antd';

import styles from "./SiderBar.module.scss";

const { Sider } = Layout;

type PropsType = {}

const SiderBar: React.FC<PropsType> = (props) => {
    return (
        <Sider className={styles.sidebarContainer}>
            Text
        </Sider>
    );
};

export default SiderBar;