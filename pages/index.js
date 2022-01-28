import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GBlog</title>
        <meta name='description' content='Personal Blog Spindyzel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1 className='text-5xl font-bold text-center'>Home</h1>
      </div>
    </div>
  )
}
