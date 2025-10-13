import React, {useCallback} from 'react';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import styles from './AuthContainer.module.scss'
import {useTranslations} from "next-intl";
import ButtonAnimation from "@/components/ui/ButtonAnimation";
import InputAnimation from "@/components/ui/InputAnimation";

type PropsType = {}

const LoginForm: React.FC<PropsType> = (props) => {
    const t = useTranslations("AuthPage.login");
    
    // Callbacks
    const onFinish = useCallback((values: any) => {
        console.log('Received values of form: ', values);
    }, []);
    
    return (
        <div className={`${styles.loginFormContainer}`}>
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
                noValidate={false}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    required
                    wrapperCol={{className: "mb-4"}}
                    getValueProps={(value) => {
                        console.log('value', value);
                        return value;
                    }}
                >
                    <InputAnimation icon={MailOutlined} type={"email"} placeholder={"Email"} name={"username"} />
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    wrapperCol={{className: "mb-4"}}
                >
                    <InputAnimation icon={LockOutlined} type={"password"} placeholder={"Password"} />
                </Form.Item>
                
                <Form.Item className={"text-white"}>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="">Forgot password</a>
                    </Flex>
                </Form.Item>
            
                <Form.Item>
                    <ButtonAnimation
                        title={t("login_title_btn")}
                        htmlType={"submit"}
                    />
                </Form.Item>
            </Form>

            
        </div>
    );
};

export default LoginForm;