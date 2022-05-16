import Image from 'next/image';
import React, { FC } from 'react';
import { todoList } from 'src/static/contents';

const Component: FC = () => (
  <article className='py-8 md:py-16'>
    <div className='flex justify-center'>
      <Image src='/img/reading.png' alt='本の上で読書をする人' width={200} height={200} />
    </div>
    <h1 className='mt-8'>やること(やりたいこと)</h1>
    {todoList.map(({ title, descriptions }, i) => (
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
