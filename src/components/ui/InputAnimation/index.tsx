import React, {ReactNode, useMemo, useState} from 'react';

import styles from './InputAnimation.module.scss';
import {EyeFilled, EyeInvisibleFilled} from "@ant-design/icons";

type PropsType = {
    icon?: ReactNode
    type?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAnimation: React.FC<PropsType> = (props) => {
    const {icon, type, className, placeholder, required, name, value, onChange} = props
    const [passwordStatus, setPasswordStatus] = useState<boolean>(true);
    
    const renderIcon = useMemo(() => {
        return icon ? (
            <div className={styles.inputIcon}>
                {icon}
                {required && <span className={"text-red-600 ml-0.5"}>*</span>}
            </div>
        ) : null
    }, [icon])
    
    const memoTypeInput = useMemo(() => {
        if (type === "password") {
            return passwordStatus ? type : "text"
        }
        return type
    }, [type, passwordStatus])
    
    return (
        <div className={styles.inputGroup}>
            {renderIcon}
            <input
                name={name}
                type={memoTypeInput}
                className={`${styles.inputField} ${className ?? ""}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {type === "password" && (
                <button className={styles.inputPasswordButton} type={"button"} onClick={() => setPasswordStatus(prev => !prev)}>
                    {passwordStatus ? <EyeFilled/> : <EyeInvisibleFilled />}
                </button>
            )}
        </div>
    );
};

export default InputAnimation;