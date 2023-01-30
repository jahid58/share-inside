import Link from 'next/link';
import React from 'react';
import { MdMessage, MdNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Nav = () => {
  return (
    <div className='bg-white text-teal-900 h-12 grid grid-cols-3  items-center'>
      <p className='text-3xl font-bold px-4 font-serif'>INSIDE SHARE</p>
      <div>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search'
          className='h-8 bg-gray-50 w-[300px] px-4 text-sm font-thin font-serif text-gray-900 rounded-md border-none outline-1'
        />
      </div>
      <ul className='flex items-center justify-center space-x-4'>
        <li className='cursor-pointer hover:text-green-900'>
          <Link href='/create-post'>Create post </Link>
        </li>
        <li className='cursor-pointer hover:text-green-900'>
          <MdMessage />
        </li>
        <li className='cursor-pointer hover:text-green-900'>
          <MdNotifications />
        </li>
        <li className='cursor-pointer hover:text-green-900'>
          <CgProfile />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
