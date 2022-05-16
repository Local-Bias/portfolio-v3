import React, { FC, ReactNode } from 'react';

const Component: FC<{ children: ReactNode }> = ({ children }) => (
  <main className='transition-all md:basis-3/4'>
    <div className='max-w-screen-md mx-auto'>{children}</div>
  </main>
);

export default Component;
