import React, { FC, ReactNode } from 'react';

import Sidebar from './sidebar';
import ContentWrapper from './content-wrapper';
import RightSpacer from './right-spacer';
import Footer from './footer';

const Component: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div className='md:flex gap-8 justify-center'>
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
      <RightSpacer />
    </div>
    <Footer />
  </>
);

export default Component;
