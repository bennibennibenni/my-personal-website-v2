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
            A results-driven software engineer passionate about architecting
            resilient, high-performance web ecosystems and intuitive digital
            experiences. With a proven track record delivering mission-critical
            enterprise applications and modernizing legacy codebases, I
            specialize in the modern React, Next.js, and TypeScript ecosystem
            alongside robust backend microservices and RESTful APIs built with
            Spring Boot, Quarkus, and Node.js. I thrive on solving complex
            full-stack challenges, optimizing runtime performance, and
            collaborating closely with cross-functional teams to build scalable
            software that creates real-world impact.
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
