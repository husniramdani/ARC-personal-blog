import Head from 'next/head'

import Navbar from '@components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GBlog</title>
        <meta name='description' content='Personal Blog Spindyzel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>
        <h1 className='text-5xl font-bold text-center'>Home</h1>
      </div>
    </div>
  )
}
