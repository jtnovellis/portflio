import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  status,
}: ProjectCardProps) {
  return (
    <div className='rounded-lg shadow-lg bg-blue-100 mb-4 p-10 lg:flex lg:justify-between'>
      <div>
        <div>
          <h3 className='font-bold text-center lg:text-start text-3xl text-blue-700'>
            {title}
          </h3>
          <p className='text-gray-800 text-center lg:text-start mt-4 lg:max-w-lg'>
            {description}
          </p>
        </div>
        <ul className='mt-4 flex justify-between mb-4'>
          <li>
            <strong className='text-blue-700'>Status:</strong> {status}
          </li>
          <li>
            <a
              href={link}
              target='_blank'
              rel='noreferrer noopener'
              className='text-blue-700 font-bold hover:text-white border border-blue-500 rounded-md px-2 py-1 hover:bg-blue-500'
            >
              Demo
            </a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center'>
        <Image
          className='rounded-t-lg'
          src={imageUrl}
          alt={title}
          width={345}
          height={120}
        />
      </div>
    </div>
  );
}
