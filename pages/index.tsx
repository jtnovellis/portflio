import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='px-5 mt-4 h-full'>
      <div className='py-12'>
        <h1 className='text-6xl text-center font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text'>
          Jairo Jair Toro Novellis
        </h1>
        <h2 className='text-3xl mt-5 text-center font-bold text-gray-400'>
          Full Stack Developer
        </h2>
      </div>
      <div className='flex justify-center items-center'>
        <Image
          src='/jairo.png'
          alt='Profile Image'
          width='180'
          height='180'
          className='rounded-full transform hover:translate-y-2'
        />
      </div>
      <div className='mt-6 text-center text-gray-500'>
        <p className='mb-5'>
          Step by step every day is better than a lot sometimes.
        </p>
        <Link
          className='border border-blue-600 text-blue-600 rounded-md p-2'
          href='/about'
        >
          More about me
        </Link>
      </div>
    </section>
  )
}
