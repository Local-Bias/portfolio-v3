import React, { FC, ReactNode } from 'react';

import Sidebar from './sidebar';
import ContentWrapper from './content-wrapper';

const Component: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='md:flex'>
    <Sidebar />
    <ContentWrapper>{children}</ContentWrapper>
  </div>
);

export default Component;
