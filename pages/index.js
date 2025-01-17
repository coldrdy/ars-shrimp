import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Product from "../components/Product";
import FootAgain from "../components/FootAgain";

export default function Home() {
  return (
    <>
      <SeoHead title='Ars Shrimp' />
      <Layout>
        <Hero />
        <Feature />
        <Gallery />
        <Product />
        <FootAgain />
      </Layout>
    </>
  );
}
