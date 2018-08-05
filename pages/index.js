import Link from "next/link";
import Layout from "../components/MyLayout";

const Index = () => (
  <Layout>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </Layout>
);

export default Index;
