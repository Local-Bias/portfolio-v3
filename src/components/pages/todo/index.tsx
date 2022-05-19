import Head from 'next/head';
import React, { FC } from 'react';
import { todoList } from 'src/static/contents';
import { meta } from 'src/static/site-config';

const Component: FC = () => (
  <>
    <Head>
      <title>やりたいこと | {meta.title}</title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/reading.webp' alt='本の上で読書をする人' width={200} height={200} />
      </div>
      <h1 className='mt-8'>やること(やりたいこと)</h1>
      {todoList.map(({ title, descriptions }, i) => (
        <section key={i}>
          <h2>{title}</h2>
          {descriptions.map((description, j) => (
            <p key={`${i}-${j}`}>{description}</p>
          ))}
        </section>
      ))}
    </article>
  </>
);

export default Component;
