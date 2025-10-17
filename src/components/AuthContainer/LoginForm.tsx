import React from 'react';
import { Checkbox, Form, Flex } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {useTranslations} from "next-intl";

import styles from './AuthContainer.module.scss'
import ButtonAnimation from "@/components/ui/ButtonAnimation";
import InputAnimation from "@/components/ui/InputAnimation";
import useLogin from "@/components/AuthContainer/authHook/loginHook";

type PropsType = {}

const LoginForm: React.FC<PropsType> = (props) => {
    const t = useTranslations("AuthPage.login");
    
    // Form FormInstance
    const [form] = Form.useForm();
    const { getFieldValue, setFieldValue } = form;
    
    // Hook helper
    const { onFinish } = useLogin({form})
    
    return (
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
    );
};

export default LoginForm;