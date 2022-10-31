import React, { FC, ReactNode } from 'react';

const Component: FC<{ children: ReactNode }> = ({ children }) => (
  <main className='transition-all max-w-screen-md min-h-screen basis-[768px]'>{children}</main>
);

export default Component;
