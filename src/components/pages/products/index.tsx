import Image from 'next/image';
import React, { FC } from 'react';
import { experiences, products } from 'src/static/contents';

const Component: FC = () => (
  <article className='py-8 md:py-16'>
    <div className='flex justify-center'>
      <Image src='/img/tree.png' alt='大きな木' width={200} height={200} />
    </div>
    <h1 className='mt-8'>つくったもの</h1>
    {products.map((product, i) => (
      <section key={i}>
        <h2>{product.title}</h2>
        {!!product.img && <Image src={product.img} width={1280} height={720} layout='responsive' />}
        {product.descriptions.map((description, j) => (
          <p key={`${i}-${j}`}>{description}</p>
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
);

export default Component;
