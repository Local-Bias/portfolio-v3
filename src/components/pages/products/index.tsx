import Image from 'next/image';
import React, { FC } from 'react';
import { products } from 'src/static/contents';

const Component: FC = () => (
  <article className='py-8 md:py-16'>
    <div className='flex justify-center'>
      <Image src='/img/tree.png' alt='大きな木' width={200} height={200} />
    </div>
    <h1 className='mt-8'>つくったもの</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
      {products.map(({ title, description }, i) => (
        <div key={i}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </article>
);

export default Component;
