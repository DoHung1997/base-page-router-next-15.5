import React, {ReactNode} from 'react';

import styles from './ButtonAnimation.module.scss'

type PropsType = {
    title?: string | ReactNode
    className?: string;
    onClick?: () => void;
    htmlType?: "button" | "reset" | "submit" | undefined;
    hover?: boolean;
}

const ButtonAnimation: React.FC<PropsType> = (props) => {
    // Props
    const {title, className, onClick, htmlType, hover = true} = props;
    
    return (
        <button 
            type={htmlType ?? "button"}
            className={`${className ?? ""} ${styles.animationButton} ${hover ? styles.animationButtonHover : ""}`} 
            onClick={onClick}
        >
            {title ?? ""}
        </button>
    );
};

export default ButtonAnimation;