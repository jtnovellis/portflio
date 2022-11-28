import React, { useState } from 'react'
import { IconFolders, IconMenu2, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const routes = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
]

export default function Navbar() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const desktopLinks = routes.map((route) => (
    <li
      key={route.label}
      className='flex items-center rounded-lg ml-3 px-2 text-blue-700 text-xl hover:bg-blue-700 hover:text-white'
    >
      <Link href={route.link}>{route.label}</Link>
    </li>
  ))

  const mobileLinks = routes.map((route) => (
    <li
      key={route.label}
      className='text-blue-700 text-xl hover:bg-blue-700 hover:text-white mb-7'
    >
      <button
        onClick={() => {
          router.push(route.link)
          setShow((prev) => !prev)
        }}
      >
        {route.label}
      </button>
    </li>
  ))

  return (
    <header className='px-3 w-full fixed top-0'>
      <nav className='flex justify-between max-w-5xl py-4 px-6 mx-auto rounded-lg my-2 shadow-xl h-20 bg-white'>
        <Link href='/' className='flex items-center'>
          <>
            <IconFolders size={32} color='rgb(29, 78, 216)' />
            <span className='ml-2 text-2xl text-blue-700 font-extrabold'>
              Portfolio
            </span>
          </>
        </Link>
        <ul className='px-3 hidden md:flex'>{desktopLinks}</ul>
        <button className='md:hidden' onClick={() => setShow((prev) => !prev)}>
          <IconMenu2 color='rgb(29, 78, 216)' />
        </button>
        {show && (
          <div className='bg-white h-screen w-screen fixed right-0 p-6 z-10'>
            <div className='flex justify-between items-start'>
              <ul>{mobileLinks}</ul>
              <button onClick={() => setShow((prev) => !prev)}>
                <IconX color='rgb(29, 78, 216)' />
              </button>
            </div>
            <div className='my-16' />
            <div className='flex items-center justify-center'>
              <IconFolders size={32} color='rgb(29, 78, 216)' />
              <span className='ml-2 text-2xl text-blue-700 font-extrabold'>
                Portfolio
              </span>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
