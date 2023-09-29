import "../styles/globals.css";
// internal import
import {NavBar} from "../components/ComponentIndex";

const MyApp = ({ Component, pageProps }) => (
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
