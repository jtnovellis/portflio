import React from 'react'
import { IconFolders } from '@tabler/icons'
import Link from 'next/link'

const routes = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
]

export default function Navbar() {
  const links = routes.map((route) => (
    <li
      key={route.label}
      className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'
    >
      <Link href={route.link}>{route.label}</Link>
    </li>
  ))

  return (
    <nav className='flex justify-between max-w-5xl py-4 px-4 mx-auto rounded-lg my-2 shadow-xl h-20'>
      <Link href='/' className='flex items-center'>
        <>
          <IconFolders size={32} color='rgb(29, 78, 216)' />
          <span className='ml-2 text-2xl text-blue-700 font-extrabold'>
            Portfolio
          </span>
        </>
      </Link>
      <ul className='flex px-3'>{links}</ul>
    </nav>
  )
}
