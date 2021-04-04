import "styles/index.scss";

import { Layout } from "components";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
