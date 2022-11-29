import React from 'react'
import Image from 'next/image'
import { projectsData } from '../utils/projectsData'

export default function Projects() {
  const projects = projectsData.map((project) => {
    return (
      <div
        className='rounded-lg shadow-lg bg-white max-w-sm m-4'
        key={project.title}
      >
        <a
          href={project.link}
          data-mdb-ripple='true'
          target='_blank'
          rel='noopener noreferrer'
          data-mdb-ripple-color='light'
        >
          <Image
            className='rounded-t-lg'
            src={project.imageUrl}
            alt='project'
            width={385}
            height={140}
          />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>
            {project.title}
          </h5>
          <h6>
            <strong>Status:</strong> {project.status}
          </h6>
          <p className='text-gray-700 text-base mb-4'>{project.description}</p>
          <div>
            <h6 className='mb-4'>
              <strong>Code:</strong>
            </h6>
            <div className='flex justify-between'>
              <a
                href={project.codeFront}
                data-mdb-ripple='true'
                target='_blank'
                rel='noopener noreferrer'
                data-mdb-ripple-color='light'
                className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                Front End
              </a>
              <a
                href={project.codeBack}
                data-mdb-ripple='true'
                target='_blank'
                rel='noopener noreferrer'
                data-mdb-ripple-color='light'
                className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                Back End
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='flex flex-col justify-center mt-[5rem]'>{projects}</div>
  )
}
