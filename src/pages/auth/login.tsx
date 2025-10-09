import React from 'react';
import AuthContainer from "@/components/AuthContainer";
import {useTranslations} from "next-intl";
import {LanguageKeyName} from "@/languages/language-key-name";
import {AuthActionTypes} from "@/constants";

export default function LoginPage()  {
    const t = useTranslations(LanguageKeyName.AuthPage);
    return (
        <AuthContainer actionType={AuthActionTypes.LOGIN}>
            
        </AuthContainer>
    );
};

LoginPage.Title = "AuthPage.login.title"

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            // You can get the messages from anywhere you like. The recommended
            // pattern is to put them in JSON files separated by locale and read
            // the desired one based on the `locale` received from Next.js.
            messages: (await import(`@/languages/${locale ?? 'en'}.json`)).default
        },
    }
}