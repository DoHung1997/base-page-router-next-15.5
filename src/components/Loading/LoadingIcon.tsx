import React from 'react';
import {LoadingOutlined} from "@ant-design/icons";

type PropsType = {
    classNames?: string
}

const LoadingIcon: React.FC<PropsType> = (props) => {
    const {classNames} = props
    return (
        <><LoadingOutlined className={classNames} /></>
    );
};

export default LoadingIcon;