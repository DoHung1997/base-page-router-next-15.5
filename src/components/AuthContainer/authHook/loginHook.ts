import {useCallback} from "react";
import { useRouter } from 'next/router'

import {FormInstance} from "antd";

type PropsType = {
    form: FormInstance<any>
}

const useLogin = (props: PropsType) => {
    const {push} = useRouter()

    const onFinish = useCallback(async (values: any) => {
        console.log('Received values of form: ', values);
        await push('/', undefined, {shallow: true})
    }, []);
    
    return {
        onFinish
    }
}

export default useLogin;