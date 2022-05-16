import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import 'src/styles/reset.css';
import 'src/styles/globals.css';

import Layout from 'src/components/layout';
import { GoogleTagManager } from 'src/components/functional/google-tag-manager';

const App = ({ Component, pageProps }: AppProps) => (
  <Suspense fallback={<p>読み込み中...</p>}>
    <GoogleTagManager />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Suspense>
);

export default App;
