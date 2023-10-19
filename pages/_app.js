import "../styles/globals.css";
// internal import
import {NavBar, Footer} from "../components/ComponentIndex";

const MyApp = ({ Component, pageProps }) => (
  <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
