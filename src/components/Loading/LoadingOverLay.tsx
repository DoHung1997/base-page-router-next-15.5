import React from 'react';

import styles from "./Loading.module.scss";
import LoadingIcon from "@/components/Loading/LoadingIcon";

type PropsType = {
    
}

const LoadingOverLay: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.loadingOverlay}>
            <LoadingIcon classNames={"text-8xl !text-white"} />
            <div className="text-9xl" />
        </div>
    );
};

export default LoadingOverLay;