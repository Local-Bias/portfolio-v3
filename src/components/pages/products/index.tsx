import Head from 'next/head';
import React, { FC } from 'react';
import { experiences, products } from 'src/static/contents';
import { meta } from 'src/static/site-config';

const Component: FC = () => (
  <>
    <Head>
      <title>つくったもの | {meta.title}</title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/tree.webp' alt='大きな木' loading='eager' width={200} height={200} />
      </div>
      <h1 className='mt-8'>つくったもの</h1>
      {products.map((product, i) => (
        <section key={i}>
          <h2>{product.title}</h2>
          {product.descriptions.map((description, j) => (
            <p key={`${i}-${j}`}>{description}</p>
          ))}
          {!!product.images?.length &&
            product.images.map(({ url, alt }, j) => (
              <img key={`img${i}-${j}`} src={url} alt={alt} loading='lazy' />
            ))}
          {!!product.link && (
            <a target='_blank' href={product.link} rel='nofollow noopener noreferrer'>
              {product.linkLabel || 'サイトはこちら'}
            </a>
          )}
        </section>
      ))}
      <h2>その他、経験したこと</h2>
      {experiences.map(({ title, descriptions }, i) => (
        <section key={i}>
          <h3>{title}</h3>
          {descriptions.map((description, j) => (
            <p key={`${i}-${j}`}>{description}</p>
          ))}
        </section>
      ))}
    </article>
  </>
);

export default Component;
