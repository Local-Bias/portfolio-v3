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
    <>
      <header className='flex md:hidden sticky top-0 h-12 px-2 justify-between items-center'>
        <div>{meta.title}</div>
        <div id='header-menu-icon' onClick={toggle} className='cursor-pointer w-6 h-6 relative'>
          <div className='bg-black w-full h-[2px] absolute top-1/2 left-0 before:content-[""] before:bg-black before:h-[2px] before:w-full before:absolute before:left-0 before:-top-2 after:content-[""] after:bg-black after:h-[2px] after:w-full after:absolute after:left-0 after:-bottom-2'></div>
        </div>
      </header>
      {menuShown && (
        <div className='fixed z-50 opacity-0 animate-appear w-screen h-screen bg-white'>
          <Common />
        </div>
      )}
    </>
  );
};

export default Component;
