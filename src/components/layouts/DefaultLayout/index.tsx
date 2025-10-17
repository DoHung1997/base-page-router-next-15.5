import React from 'react';
import { Layout } from 'antd';

import styles from "./DefaultLayout.module.scss"
import HeaderBar from "@/components/layouts/DefaultLayout/HeaderBar";
import SiderBar from "@/components/layouts/DefaultLayout/SiderBar";
import BodyContent from "@/components/layouts/DefaultLayout/BodyContent";
import FooterCustom from "@/components/layouts/DefaultLayout/Footer";

type PropsType = {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<PropsType> = ({children}) => {
    return (
        <Layout className={styles.containerLayout}>
            {/* Sidebar */}
            <SiderBar />
            
            <Layout>
                {/* Header */}
                <HeaderBar /> 
                
                {/* Body */}
                <BodyContent>
                    {children}
                </BodyContent>
                
                {/* Footer */}
                <FooterCustom />
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;