import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function SingleNews() {
  const router = useRouter();

  return (
    <Layout>
      <h2>Single News</h2>
    </Layout>
  );
}
