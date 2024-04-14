import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import { useMyContext } from "@/context/DarkModeContext";
import { useMyContextSearch } from "@/context/SearchInputContext";

export default function Home() {
  const contextValue = useMyContext();
  const contextSearch = useMyContextSearch();
  return (
    <>
      <Head>
        <title>Sparklens</title>
        <meta
          name="keywords"
          content="inspiration, ui, ux, dropdown, navigation, megamenu, modal, button, navbar, tab, design inspiration, creative community, designer portfolio, design showcase, UI/UX design, graphic design, animation, illustration, design trends, freelance design jobs"
        />
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
