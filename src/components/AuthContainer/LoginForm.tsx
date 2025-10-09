import React, {useCallback} from 'react';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import styles from './AuthContainer.module.scss'
import {useTranslations} from "next-intl";

type PropsType = {}

const LoginForm: React.FC<PropsType> = (props) => {
    const t = useTranslations("AuthPage");
    
    // Callbacks
    const onFinish = useCallback((values: any) => {
        console.log('Received values of form: ', values);
    }, []);
    
    return (
        <div className={`${styles.loginFormContainer} backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10 transition-all duration-300 hover:border-white/20`}>
            <div className="text-center mb-8">
                <div className="inline-block px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                    <LockOutlined className="text-white text-3xl font-extrabold" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400 text-sm">Enter your credentials to continue</p>
            </div>

            <Form
                name="login"
                initialValues={{ remember: true }}
                className={styles.form}
                onFinish={onFinish}
                layout={"vertical"}
            >
                <Form.Item
                    label={(
                        <p className={"text-gray-300"}>
                            {t("login.username")}
                        </p>
                    )}
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input 
                        prefix={<UserOutlined />} 
                        placeholder="Username"
                        className={"bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"}
                    />
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="">Forgot password</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;