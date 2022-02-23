import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import "../styles/event.css"
import type { AppProps } from "next/app";
import { AuthProvider } from "../components/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
