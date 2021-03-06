import React from 'react';
import { TwitterLogo, GithubLogo, FigmaLogo } from 'phosphor-react';
import CircleButton from '@components/circle-button';

export default function Footer() {
  return (
    <footer className='
      flex flex-col justify-between items-center z-20
      md:mx-24 md:flex-row
    '>
      <div className='flex items-center'>
        <p className='
          font-semibold mb-5
          md:mb-0
        '>
          Thanks for <span className='text-orange underline'> coming!</span>
        </p>
      </div>
      <a
        href='mailto:gblog@gmail.com'
        className='
          hidden font-semibold underline
          md:block
        '
      >
        gblog@gmail.com
      </a>
      <div className='flex flex-row space-x-4 mb-5'>
        <CircleButton link='https://www.twitter.com'>
          <TwitterLogo
            size={24}
            weight='fill'
            className='
              m-auto stroke-current text-black
              group-hover:text-orange
              dark:text-gray-200
            '
          />
        </CircleButton>
        <CircleButton link='https://www.github.com/husniramdani/personal-blog'>
          <GithubLogo
            size={24}
            weight='fill'
            className='
              m-auto stroke-current text-black
              group-hover:text-orange
              dark:text-gray-200
            '
          />
        </CircleButton>
        <CircleButton link='https://www.figma.com/community/file/1047928907190850139'>
          <FigmaLogo
            size={24}
            weight='fill'
            className='
              m-auto stroke-current text-black
              group-hover:text-orange
              dark:text-gray-200
            '
          />
        </CircleButton>
      </div>
    </footer>
  );
}
