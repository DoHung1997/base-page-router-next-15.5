import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

type PropsType = {}

const FooterCustom: React.FC<PropsType> = (props) => {
    return (
        <Footer>
            Footer
        </Footer>
    );
};

export default FooterCustom;