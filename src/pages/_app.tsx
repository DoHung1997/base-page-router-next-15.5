import "@/styles/globals.css";
import {AppPropsWithLayout} from "@/models/common.types";
import EmptyLayout from "@/components/layouts/EmptyLayout";
import HeadTag from "@/components/layouts/HeadTag";
import LanguagesProvider from "@/providers/LanguagesProvider";
import AntdProvider from "@/providers/AntdProvider";

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout;
  const title = Component.Title ?? '';
  const description = Component.Description ?? '';
  
  return (
      <main
          className="min-h-screen font-sans antialiased relative bg-white overflow-y-auto, overflow-x-hidden"
      >
        <LanguagesProvider pageProps={pageProps}>
          <HeadTag title={title} description={description}/>
          <AntdProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </AntdProvider>  
        </LanguagesProvider>
      </main>
  );
}
