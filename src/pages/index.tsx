import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {useTranslations} from "next-intl";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {LanguageKeyName} from "@/languages/language-key-name";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  const t = useTranslations(LanguageKeyName.HomePage);
  
  return (
      <div
          className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>{t("title")}</h1>
          <Image
              className="dark:invert"
              src="/file.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
        </div>
      </div>
  );
}

HomePage.Layout = DefaultLayout;
HomePage.Title = "HomePage.title";

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
