import Head from 'next/head'

import Navbar from '@components/navbar';
import Footer from '@components/footer';

export default function Home() {
  return (
    <div className='
      py-5 h-screen flex flex-col justify-between
      md:py-10
    '>
      {/* SEO */}
      <Head>
        <title>GBlog</title>
        <meta name='description' content='Personal Blog Spindyzel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <div>
        <h1 className='text-5xl font-bold text-center'>Home</h1>
      </div>
      <Footer />
    </div>
  )
}
