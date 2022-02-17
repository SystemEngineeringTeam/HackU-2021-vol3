import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import "../styles/event.css"
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
