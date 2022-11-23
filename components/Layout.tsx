import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
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
        <meta name='author' content='Jairo Jair Toro Novellis' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='md:container h-screen mx-auto'>{children}</main>
      <Footer />
    </>
  )
}