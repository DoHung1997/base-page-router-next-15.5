import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import { localStorageSet } from "@/helpers/storage-helper";
import {StorageKey} from "@/constants";
import {NextIntlClientProvider} from "next-intl";

type PropsType = {
    children: React.ReactNode;
    pageProps: any;
}

const LanguagesProvider: React.FC<PropsType> = (props) => {
    //Props
    const {children, pageProps} = props;
    // Router
    const {locale} = useRouter()

    // Effect
    useEffect(() => {
        localStorageSet(StorageKey.LOCALE, locale ?? "en")
    }, [locale])
    
    return (
        <NextIntlClientProvider
            locale={locale ? locale : 'en'}
            messages={pageProps.messages}
            timeZone={'UTC'}
        >
            {children}
        </NextIntlClientProvider>
    );
};

export default LanguagesProvider;