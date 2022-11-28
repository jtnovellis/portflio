import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='px-5 mt-14 h-full mb-24 w-full lg:flex lg:justify-between lg:items-center'>
      <div className='py-12'>
        <h1 className='text-6xl text-center sm:mt-16 md:mt-10 font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text'>
          Jairo Jair Toro Novellis
        </h1>
        <h2 className='text-3xl mt-5 text-center font-bold text-gray-400'>
          Full Stack Developer
        </h2>
      </div>
      <div>
        <div className='flex justify-center items-center'>
          <Image
            src='/jairo.png'
            alt='Profile Image'
            width='180'
            height='180'
            className='rounded-full md:transform md:hover:translate-y-1 md:transition-transform'
          />
        </div>
        <div className='mt-6 sm:mt-12 text-center text-gray-500 lg:h-[15rem] flex flex-col justify-between items-center'>
          <p className='mb-5 sm:mb-12'>
            Step by step every day is better than a lot sometimes.
          </p>
          <p>
            I am a developer and musician with a fervent passion for the
            technology with excellent interpersonal relationships. I am always
            looking for new challenges, creating solutions and making myself
            better.
          </p>
          <Link
            className='border border-blue-600 text-blue-600 rounded-md p-2'
            href='/about'
          >
            More about me
          </Link>
        </div>
      </div>
    </section>
  )
}
