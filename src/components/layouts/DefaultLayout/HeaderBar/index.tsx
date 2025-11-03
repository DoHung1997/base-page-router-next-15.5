import React from 'react';
import { Layout } from 'antd';

import styles from "./Header.module.scss";

const { Header } = Layout;

type PropsType = {}

const HeaderBar: React.FC<PropsType> = (props) => {
    return (
        <Header className={styles.headerContainer}>
            <div className={"text-white font-bold text-3xl"}>Sổ tay ghi nợ của Huy</div>
        </Header>
    );
};

export default HeaderBar;