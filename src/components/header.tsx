import React from 'react';

import NextImage from '@/components/next-image';

import profilePic from '@/assets/images/profile.webp';

interface HeaderProps {
  timeout: boolean;
  handleOpenArticle: (article: string) => void;
}

const Header: React.FC<HeaderProps> = ({ timeout, handleOpenArticle }) => {
  return (
    <header id='header' style={timeout ? { display: 'none' } : {}}>
      <NextImage
        useSkeleton
        src={profilePic}
        width='150'
        height='150'
        alt='Icon'
      />
      <div className='content'>
        <div className='inner'>
          <h1>Benni</h1>
          <p>
            I am a punctual and motivated individual who is able to work in a
            busy environment and produce a high standard of work. In addition, I
            am also an excellent team worker and able to take instructions from
            all levels and build up good working relationships with all
            colleagues. Therefore, I have the ability to manage multiple
            responsibilities to the highest standard.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleOpenArticle('tech-stack')}>
              Tech stack
            </button>
          </li>
          <li>
            <button onClick={() => handleOpenArticle('education')}>
              Education
            </button>
          </li>
          <li>
            <button onClick={() => handleOpenArticle('experience')}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleOpenArticle('showcase')}>
              Showcase
            </button>
          </li>
          <li>
            <button onClick={() => handleOpenArticle('contact')}>
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
