import React from 'react'
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from '@tabler/icons'

const socialData = [
  {
    label: 'GitHub',
    icon: <IconBrandGithub color='#2563eb' />,
    link: 'https://github.com/jtnovellis',
  },
  {
    label: 'Twitter',
    icon: <IconBrandTwitter color='#2563eb' />,
    link: 'https://twitter.com/JairojairtoroN',
  },
  {
    label: 'LinkedIn',
    icon: <IconBrandLinkedin color='#2563eb' />,
    link: 'https://www.linkedin.com/in/jairotoronovellis',
  },
]

const socials = socialData.map((item) => (
  <li key={item.label}>
    <a
      href={item.link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex text-blue-600'
    >
      {item.icon}
      <span className='ml-1'>{item.label}</span>
    </a>
  </li>
))

export default function Footer() {
  return (
    <footer className='fixed bottom-0 w-full flex items-center justify-center py-6'>
      <ul className='flex w-full justify-around'>{socials}</ul>
    </footer>
  )
}
