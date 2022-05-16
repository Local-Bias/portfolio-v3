import Image from 'next/image';
import React, { FC } from 'react';

const Component: FC = () => (
  <article className='py-8 md:py-16'>
    <div className='flex justify-center'>
      <Image src='/img/person.png' alt='シャツを着た人' width={200} height={200} />
    </div>
    <h1 className='mt-8'>私について</h1>
    <section>
      <p>佐藤　佳久です。Ribbitと名乗っている場合もあります。</p>
      <p>1993年生まれです。</p>
    </section>
  </article>
);

export default Component;
