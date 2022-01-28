import React from 'react';
import Head from 'next/head';

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Title</title>
                <meta name='description' content='Detail content Blog' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                Detail
            </div>
        </div>
    )
}