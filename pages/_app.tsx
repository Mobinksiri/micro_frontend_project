import "../styles/globals.css";
import { AppProps } from "next/app";

interface MyAppProps extends AppProps {}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
