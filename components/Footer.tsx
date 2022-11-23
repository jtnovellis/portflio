import React from 'react'
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from '@tabler/icons'

const socialData = [
  {
    label: 'GitHub',
    icon: <IconBrandGithub />,
    link: 'https://github.com/jtnovellis',
  },
  {
    label: 'Twitter',
    icon: <IconBrandTwitter />,
    link: 'https://twitter.com/JairojairtoroN',
  },
  {
    label: 'LinkedIn',
    icon: <IconBrandLinkedin />,
    link: 'https://www.linkedin.com/in/jairotoronovellis',
  },
]

const socials = socialData.map((item) => (
  <li key={item.label}>
    <a
      href={item.link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex mr-8'
    >
      {item.icon}
      <span className='ml-1'>{item.label}</span>
    </a>
  </li>
))

export default function Footer() {
  return (
    <footer className=''>
      <ul className='flex justify-center'>{socials}</ul>
    </footer>
  )
}
