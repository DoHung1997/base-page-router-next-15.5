import React, {useMemo} from 'react';
import {LockOutlined} from "@ant-design/icons";
import {useTranslations} from "next-intl";

import styles from './AuthContainer.module.scss'
import LoginForm from "@/components/AuthContainer/LoginForm";
import RegisterForm from "@/components/AuthContainer/RegisterForm";

import {AuthActionTypes} from "@/constants";

type PropsType = {
    actionType: AuthActionTypes;
}

const AuthContainer: React.FC<PropsType> = (props) => {
    //Props
    const {actionType} = props;

    const t = useTranslations("AuthPage");
    
    // Memo
    const memoRenderForm = useMemo(() => {
        switch (actionType) {
            case AuthActionTypes.LOGIN:
                return <LoginForm />;
            case AuthActionTypes.REGISTER:
                return <RegisterForm />;
            default:
                return null;
        }
    }, [actionType])
    
    return (
        <div className={styles.authContainer}>
            <div className={`${styles.formContainer}`}>
                <div className="text-center mb-8">
                    <div className="inline-block px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                        <LockOutlined className="text-white text-3xl font-extrabold" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">{t("welcome_back")}</h1>
                    <p className="text-gray-400 text-sm">{t("enter_your_credentials_to_continue")}</p>
                </div>
           
                {/* Render form */}
                {memoRenderForm}
            </div>
        </div>
    );
};

export default AuthContainer;