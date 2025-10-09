import Document, {Html, Head, Main, NextScript} from "next/document";
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type { DocumentContext } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
          <meta name='description' content={process.env.NEXT_PUBLIC_APP_NAME}/>
          <link rel='icon' href='/favicon.ico'/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </>
        ),
    };
};
