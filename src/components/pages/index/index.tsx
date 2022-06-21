import Head from 'next/head';
import React, { FC } from 'react';
import { meta } from 'src/static/site-config';

const Component: FC = () => (
  <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <img src='/img/person.webp' alt='シャツを着た人' loading='eager' width={200} height={200} />
      <div>Ribbit</div>
    </div>
  </>
);

export default Component;
