import React, { FC } from 'react';
import Common from './common';

const Component: FC = () => {
  return (
    <div className='hidden md:block min-w-[16rem] w-72 max-w-sm'>
      <div className='sticky top-0 mx-auto'>
        <Common />
      </div>
    </div>
  );
};

export default Component;
