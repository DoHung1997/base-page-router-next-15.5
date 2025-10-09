import React from 'react';
import {Input} from "antd";

type PropsType = {
    
}

const CustomInput: React.FC<PropsType> = (props) => {
    return (
        <Input 
            className={"bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"}
            {/*{...props}*/}
        />
    );
};

export default CustomInput;