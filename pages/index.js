import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </div>
  );
}
