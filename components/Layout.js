import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Hero from "./Hero";

export default function Layout({ title, keyword, desciption, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desciption} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      {router.pathname === "/" && <Hero />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Sport News | Find Latest Sport News",
  desciption: "A website that brings you latest news about sports",
  keyword:
    "football, basketball, f1, motogp, cricket, tennis, volleyball, badminton, golf",
};
