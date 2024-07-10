import "../styles/globals.css";
import Head from "next/head";
// internal import
import { NavBar, Footer } from "../components/ComponentIndex";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"  / >
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      // set title an description for the site
      <title>Cryptix &nbsp;&mdash;&nbsp; NFT Marketplace</title>
      <meta name="description" content="The world's first and largest digital marketplace for crypto collectibles and non-fungible token (NFTs). Buy, sell, and discover exclusive digital items" />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
