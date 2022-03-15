import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import Head from 'next/head';

import Navbar from '@components/navbar';
import Footer from '@components/footer';

export default function Home() {
  const scrollEl = useRef(0);
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
      {/* main page */}
      <main className='
        flex flex-col min-h-140
        md:min-h-148
      '>
        <h1 className='
          mb-5 text-2xl text-center underline font-bold
          md:mb-8 md:text-3xl
        '>
          Latest Updates
        </h1>
        <ScrollContainer
          ref={scrollEl}
          className='
            pl-8 -mt-5 pt-5 flex flex-wrap flex-col content-start h-full overflow-x-auto
            md:pl-24 md:-mt-8 md:pt-8
          '
        >
          hehe
        </ScrollContainer>
      </main>
      <Footer />
    </div>
  )
}
