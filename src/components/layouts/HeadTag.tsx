import React from 'react';
import {useTranslations} from "next-intl";
import Head from "next/head";

type PropsType = {
    title?: string;
    description?: string;
}

const HeadTag: React.FC<PropsType> = ({title, description}) => {
    const t = useTranslations()
    const appName = process.env.NEXT_PUBLIC_APP_NAME ? ("| " + process.env.NEXT_PUBLIC_APP_NAME) : "";
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "";
    
    return (
        <div>
            <Head>
                <title>{title ? `${t(title)} ${appName}` : appName}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name="description"
                      content={`${description ? t(description) : appDescription}`}/>
                <meta property="og:title" content={`${appName}`}/>
                <meta property="og:description"
                      content={`${description ? t(description) : appDescription}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/assets/img/rsc.png"/>
            </Head>
        </div>
    );
};

export default HeadTag;