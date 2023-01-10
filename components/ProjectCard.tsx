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
    <div className='rounded-lg shadow-lg bg-blue-100/50 max-w-sm m-4'>
      <div>
        <div>
          <h3 className='font-bold text-center text-3xl text-blue-700'>
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <ul>
          <li>
            <strong>Status:</strong> {status}
          </li>
          <li>
            <a href={link} target='_blank' rel='noreferrer noopener'>
              <strong>Demo: </strong>
              {link}
            </a>
          </li>
        </ul>
      </div>
      <Image
        className='rounded-t-lg'
        src={imageUrl}
        alt={title}
        width={345}
        height={120}
      />
    </div>
  );
}
