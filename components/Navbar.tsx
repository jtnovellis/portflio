import React from 'react'
import { IconFolders } from '@tabler/icons'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between max-w-5xl py-4 px-4 mx-auto rounded-lg my-2 shadow-xl h-20'>
      <div className='flex items-center'>
        <IconFolders size={32} color='rgb(29, 78, 216)' />
        <span className='ml-2 text-2xl text-blue-700 font-extrabold'>
          Portfolio
        </span>
      </div>
      <ul className='flex px-3'>
        <li className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'>
          <Link href='/'>Home</Link>
        </li>
        <li className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'>
          <Link href='/projects'>About</Link>
        </li>
        <li className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
