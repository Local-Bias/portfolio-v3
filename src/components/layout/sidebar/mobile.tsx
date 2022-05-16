import React, { FC, useEffect, useState } from 'react';
import Common from './common';

const Component: FC = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  useEffect(() => {
    const event = (mouseEvent: MouseEvent) => {
      const target = mouseEvent.target as HTMLElement | null;
      if (!target || !(mouseEvent.target instanceof HTMLElement)) {
        return;
      }
      if (menuShown && !target.closest('#header-user-icon')) {
        setMenuShown(false);
      }
    };

    document.addEventListener('click', event);

    return () => {
      document.removeEventListener('click', event);
    };
  }, [menuShown]);

  return (
    <div className='block md:hidden'>
      <header className='sticky top-0'></header>
      {menuShown && <Common />}
    </div>
  );
};

export default Component;
