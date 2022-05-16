import Image from 'next/image';
import React, { FC } from 'react';

const Component: FC = () => (
  <div className='h-[80vh] flex flex-col justify-center items-center'>
    <div className='text-xs'>サトウ ヨシヒサ</div>
    <div>佐藤　佳久</div>
    <Image src='/img/person.png' alt='シャツを着た人' width={200} height={200} />
    <div className='text-sm'>Ribbit</div>
  </div>
);

export default Component;
