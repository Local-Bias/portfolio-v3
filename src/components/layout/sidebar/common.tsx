import Link from 'next/link';
import React, { FC } from 'react';
import { BagIcon } from 'src/components/ui/icons/bag';
import { BlocksIcon } from 'src/components/ui/icons/blocks';
import { PieChartIcon } from 'src/components/ui/icons/pie-chart';
import { TableIcon } from 'src/components/ui/icons/table';
import { ToolIcon } from 'src/components/ui/icons/tool';
import { UserIcon } from 'src/components/ui/icons/user';

const Component: FC = () => (
  <aside aria-label='サイドバー'>
    <Link href='/'>
      <a>
        <div className='flex justify-center items-center'>
          <img src='/img/dog.webp' alt='横たわった犬' width={150} height={150} />
        </div>
      </a>
    </Link>
    <div className='overflow-y-auto w-56 mx-auto py-4 px-3'>
      <ul className='space-y-2'>
        <li>
          <Link href='/about'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <UserIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/products'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <BlocksIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Products</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/data'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <PieChartIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Data</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/skills'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <ToolIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Skills</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/career'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <BagIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Career</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/todo'>
            <a className='flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100'>
              <TableIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition group-hover:text-black' />
              <span className='flex-1 ml-3 whitespace-nowrap'>To Do</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
);

export default Component;
