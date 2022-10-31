import Link from 'next/link';
import React, { FC } from 'react';
import { Archive, Briefcase, CheckCircle, PieChart, Tool, User } from 'react-feather';

const Component: FC = () => (
  <aside aria-label='サイドバー'>
    <Link href='/'>
      <div className='flex justify-center items-center'>
        <img src='/img/dog.webp' alt='横たわった犬' width={150} height={150} />
      </div>
    </Link>
    <div className='overflow-y-auto w-56 mx-auto py-4 px-3'>
      <ul className='space-y-2'>
        <li>
          <Link
            href='/about'
            className='flex items-center p-2 text-base font-normal transition-all text-black rounded-lg hover:bg-gray-100'
          >
            <User className='text-gray-700' />
            <span className='flex-1 ml-3 whitespace-nowrap'>About</span>
          </Link>
        </li>
        <li>
          <Link
            href='/products'
            className='flex items-center p-2 text-base font-normal transition-all text-black rounded-lg hover:bg-gray-100'
          >
            <Archive className='text-gray-700' />
            <span className='flex-1 ml-3 whitespace-nowrap'>Products</span>
          </Link>
        </li>
        <li>
          <Link
            href='/data'
            className='flex items-center p-2 text-base font-normal transition-all text-black rounded-lg hover:bg-gray-100'
          >
            <PieChart className='text-gray-700' />
            <span className='flex-1 ml-3 whitespace-nowrap'>Data</span>
          </Link>
        </li>
        <li>
          <Link
            href='/skills'
            className='flex items-center p-2 text-base font-normal transition-all text-black rounded-lg hover:bg-gray-100'
          >
            <Tool className='text-gray-700' />
            <span className='flex-1 ml-3 whitespace-nowrap'>Skills</span>
          </Link>
        </li>
        <li>
          <Link
            href='/career'
            className='flex items-center p-2 text-base font-normal transition-all text-black rounded-lg hover:bg-gray-100'
          >
            <Briefcase className='text-gray-700' />
            <span className='flex-1 ml-3 whitespace-nowrap'>Career</span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
);

export default Component;
