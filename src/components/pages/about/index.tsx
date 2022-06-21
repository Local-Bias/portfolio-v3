import Head from 'next/head';
import React, { FC } from 'react';
import { meta } from 'src/static/site-config';

const Component: FC = () => (
  <>
    <Head>
      <title>私について | {meta.title}</title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/person.webp' alt='シャツを着た人' loading='eager' width={200} height={200} />
      </div>
      <h1 className='mt-8'>私について</h1>
      <section>
        <p>Ribbitと申します。</p>
        <p>1993年生まれです。今年で{new Date().getFullYear() - 1993}歳。</p>
        <p>趣味はプログラミング、料理、コーヒー。</p>
        <p>好きなフォントは源の角ゴシック。</p>
      </section>
    </article>
  </>
);

export default Component;
