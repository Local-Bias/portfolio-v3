import Head from 'next/head';
import React, { FC } from 'react';
import { careers } from 'src/static/contents';
import { meta } from 'src/static/site-config';

const Component: FC = () => (
  <>
    <Head>
      <title>経歴 | {meta.title}</title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/bag.webp' alt='ビジネスバッグ' width={200} height={200} />
      </div>
      <h1 className='mt-8'>経歴</h1>
      <section>
        {careers.map(({ title, descriptions }, i) => (
          <section key={i}>
            <h2>{title}</h2>
            {descriptions.map((description, j) => (
              <p key={`${i}-${j}`}>{description}</p>
            ))}
          </section>
        ))}
      </section>
    </article>
  </>
);

export default Component;
