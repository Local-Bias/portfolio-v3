import Head from 'next/head';
import React, { FC } from 'react';
import { meta } from 'src/static/site-config';

const TITLE = `数字で知るRibbit`;

const Component: FC = () => (
  <>
    <Head>
      <title>
        {TITLE} | {meta.title}
      </title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/presentation.webp' alt='プレゼンする人' width={200} height={200} />
      </div>
      <h1 className='mt-8'>{TITLE}</h1>
      <section></section>
      <section>
        <h2>Googleデータポータル</h2>
        <p>Google Analyticsを使って収集した、</p>
        <iframe
          width='768'
          height='768'
          src='https://datastudio.google.com/embed/reporting/faefc4c0-01ce-4748-982b-229742cc408d/page/GpNpC'
          style={{ border: '0', width: '100%' }}
          allowFullScreen
        ></iframe>
      </section>
    </article>
  </>
);

export default Component;
