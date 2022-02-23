import "../styles/globals.css";
import "../styles/admin.css";
import "../styles/event.css";
import type { AppProps } from "next/app";
import App from "next/app";
import { AuthProvider } from "../components/Auth";

App.getInitialProps = async () => ({ pageProps: {} });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
