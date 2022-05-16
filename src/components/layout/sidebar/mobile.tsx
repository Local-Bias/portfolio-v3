import React, { FC, useCallback, useEffect, useState } from 'react';
import { meta } from 'src/static/site-config';
import Common from './common';

const Component: FC = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  useEffect(() => {
    const event = (mouseEvent: MouseEvent) => {
      const target = mouseEvent.target as HTMLElement | null;
      if (!target || !(mouseEvent.target instanceof HTMLElement)) {
        return;
      }
      if (menuShown && !target.closest('#header-menu-icon')) {
        setMenuShown(false);
      }
    };

    document.addEventListener('click', event);

    return () => {
      document.removeEventListener('click', event);
    };
  }, [menuShown]);

  const toggle = useCallback(() => {
    setMenuShown((_shown) => !_shown);
  }, []);

  return (
    <div className='block md:hidden'>
      <header className='sticky top-0 h-12 px-2 flex justify-between items-center'>
        <div>{meta.title}</div>
        <div id='header-menu-icon' className='cursor-pointer' onClick={toggle}>
          🐢
        </div>
      </header>
      {menuShown && (
        <div className='fixed z-10 opacity-0 animate-appear w-screen h-screen bg-white'>
          <Common />
        </div>
      )}
    </div>
  );
};

export default Component;
