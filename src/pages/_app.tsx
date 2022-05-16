import type { AppProps } from 'next/app';
import 'src/styles/reset.css';
import 'src/styles/globals.css';

import Layout from 'src/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
