import "@/styles/globals.css";
import {AppPropsWithLayout} from "@/models/common.types";
import EmptyLayout from "@/components/layouts/EmptyLayout";
import HeadTag from "@/components/layouts/HeadTag";
import LanguagesProvider from "@/providers/LanguagesProvider";
import AntdProvider from "@/providers/AntdProvider";
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout;
  const title = Component.Title ?? '';
  const description = Component.Description ?? '';
  
  return (
      <main
          className={`${geistSans.className} ${geistMono.className} relative min-h-screen font-sans antialiased bg-black overflow-y-auto, overflow-x-hidden`}
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