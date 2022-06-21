import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import 'src/styles/reset.css';
import 'src/styles/globals.css';

import Layout from 'src/components/layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Suspense fallback={<p>読み込み中...</p>}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Suspense>
);

export default App;
