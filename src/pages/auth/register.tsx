import React, {useEffect} from 'react';
import {useTranslations} from "next-intl";
import {LanguageKeyName} from "@/languages/language-key-name";
import {useRouter} from "next/router";

export default function Register() {
    const t = useTranslations(LanguageKeyName.AuthPage);
    const {push} = useRouter()

    useEffect(() => {
        push('/')
    }, []);
    
    return (
        <div>
    
        </div>
    );
};

Register.Title = "AuthPage.register.title";

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