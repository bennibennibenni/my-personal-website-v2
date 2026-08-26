import React from 'react';

import { navigationData } from '@/data/navigation';

import NextImage from '@/components/next-image';

import profilePic from '@/assets/images/profile.jpg';

interface HeaderProps {
  timeout: boolean;
  handleOpenArticle: (article: string) => void;
}

const Header: React.FC<HeaderProps> = ({ timeout, handleOpenArticle }) => {
  return (
    <header id='header' style={timeout ? { display: 'none' } : {}}>
      <div className='avatar-wrapper'>
        <NextImage
          useSkeleton
          src={profilePic}
          width={220}
          height={220}
          alt='Benni'
          priority
          className='header-avatar'
        />
      </div>
      <div className='content'>
        <div className='inner'>
          <h1>Benni</h1>
          <p className='title-badge'>
            Software Engineer • Full-Stack Developer
          </p>
          <p className='bio'>
            I am a motivated and detail-oriented engineer who thrives in dynamic
            environments and consistently delivers high-quality software
            solutions. An effective collaborator, I build strong relationships
            across teams and drive projects to the highest standard.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          {navigationData.map((item) => (
            <li key={item.id}>
              <button
                type='button'
                onClick={() => handleOpenArticle(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
