import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import { useMyContext } from "@/context/DarkModeContext";
import { useMyContextSearch } from "@/context/SearchInputContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const contextValue = useMyContext();
  const contextSearch = useMyContextSearch();
  return (
    <>
      <Head>
        <title>Sparklens</title>
      </Head>
      <main className={contextValue?.darkMode === false ? "light" : "dark"}>
        <Navbar />
        {contextSearch?.search ? (
          <Category />
        ) : (
          <>
            <Header />
            <Category />
          </>
        )}
        <Footer />
      </main>
    </>
  );
}
