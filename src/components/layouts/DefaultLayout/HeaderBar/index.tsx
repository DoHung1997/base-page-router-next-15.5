import React from 'react';
import { Layout } from 'antd';

import styles from "./Header.module.scss";

const { Header } = Layout;

type PropsType = {}

const HeaderBar: React.FC<PropsType> = (props) => {
    return (
        <Header className={styles.headerContainer}>
            HeaderBar
        </Header>
    );
};

export default HeaderBar;