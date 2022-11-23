import Head from 'next/head';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Jairo Jair Toro Novellis</title>
        <meta
          name='description'
          content='Porfolio of Jairo Jair Toro Novellis'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
