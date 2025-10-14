import React, {useCallback} from 'react';
import { Checkbox, Form, Flex } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import styles from './AuthContainer.module.scss'
import {useTranslations} from "next-intl";
import ButtonAnimation from "@/components/ui/ButtonAnimation";
import InputAnimation from "@/components/ui/InputAnimation";

type PropsType = {}

const LoginForm: React.FC<PropsType> = (props) => {
    const t = useTranslations("AuthPage.login");
    
    const [form] = Form.useForm();
    const { getFieldValue, setFieldValue } = form;
    
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
                <h1 className="text-3xl font-bold text-white mb-2">{t("welcome_back")}</h1>
                <p className="text-gray-400 text-sm">{t("enter_your_credentials_to_continue")}</p>
            </div>

            <Form
                name="login"
                initialValues={{ remember: true, email: "", password: "" }}
                className={styles.form}
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: t("please_input_your_email") },
                        { type: 'email', message: t("the_input_is_not_valid_email") },
                    ]}
                    wrapperCol={{className: "mb-4"}}
                >
                    <InputAnimation
                        icon={<MailOutlined />}
                        placeholder={t("email")}
                        name={"email"}
                        value={getFieldValue("email")}
                        onChange={(e) => setFieldValue("email", e.target.value)}
                    />     
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: t("please_input_your_password") },
                        // { pattern: REGEX_PASSWORD, message: t("validate_password")}
                    ]}
                    wrapperCol={{className: "mb-4"}}
                >
                    <InputAnimation
                        icon={<LockOutlined />}
                        type={"password"}
                        placeholder={t("password")}
                        name={"password"}
                        value={getFieldValue("password")}
                        onChange={(e) => setFieldValue("password", e.target.value)}
                    />      
                </Form.Item>
                
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className={"text-primary"}>{t("remember_me")}</Checkbox>
                        </Form.Item>
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