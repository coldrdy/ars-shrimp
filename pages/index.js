import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Product from "../components/Product";
import Foot from "../components/Foot";

export default function Home() {
  return (
    <>
      <SeoHead title='Ars Shrimp' />
      <Layout>
        <Hero />
        <Feature />
        <Gallery />
        <Product />
        <Foot />
      </Layout>
    </>
  );
}
