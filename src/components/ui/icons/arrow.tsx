import React, { FC } from 'react';

const Component: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg x='0px' y='0px' viewBox='0 0 512 512' fill='currentColor' {...props}>
    <g>
      <polygon points='163.916,0 92.084,71.822 276.258,255.996 92.084,440.178 163.916,512 419.916,255.996'></polygon>
    </g>
  </svg>
);

export const ArrowIcon = Component;
