import React, {useMemo} from 'react';

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
            {/* Render form */}
            {memoRenderForm}
        </div>
    );
};

export default AuthContainer;