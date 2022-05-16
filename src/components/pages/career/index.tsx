import Image from 'next/image';
import React, { FC } from 'react';
import { careers } from 'src/static/contents';

const Component: FC = () => (
  <article className='px-4 py-8 md:py-16'>
    <div className='flex justify-center'>
      <Image
        priority
        loading='eager'
        src='/img/bag.png'
        alt='ビジネスバッグ'
        width={200}
        height={200}
      />
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
);

export default Component;
