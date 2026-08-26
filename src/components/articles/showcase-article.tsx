import React from 'react';

import { showcaseData } from '@/data/showcase';

import NextImage from '@/components/next-image';

import { ArticleWrapper } from './article-wrapper';

interface ShowcaseArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

export const ShowcaseArticle: React.FC<ShowcaseArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  return (
    <ArticleWrapper
      id='showcase'
      title='Showcase'
      activeArticle={activeArticle}
      articleTimeout={articleTimeout}
      onClose={onClose}
    >
      <div className='showcase-timeline'>
        {showcaseData.map((project) => (
          <div key={project.title} className='project showcase-item'>
            <h3 className='project-name'>
              <a href={project.url} target='_blank' rel='noopener noreferrer'>
                {project.title}
              </a>
            </h3>
            <NextImage
              useSkeleton
              src={project.image}
              alt={project.alt}
              sizes='(max-width: 768px) 100vw, 800px'
              quality={90}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <ul className='row-project'>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ArticleWrapper>
  );
};
