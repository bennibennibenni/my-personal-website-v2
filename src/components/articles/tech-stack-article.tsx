import React from 'react';

import { techStackCategories } from '@/data/tech-stack';

import { ArticleWrapper } from './article-wrapper';

interface TechStackArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

export const TechStackArticle: React.FC<TechStackArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  return (
    <ArticleWrapper
      id='tech-stack'
      title='Tech Stack'
      activeArticle={activeArticle}
      articleTimeout={articleTimeout}
      onClose={onClose}
    >
      <div className='tech-stack-timeline'>
        {techStackCategories.map((group) => (
          <div className='tech-stack-group' key={group.category}>
            <h3 className='tech-group-title'>{group.category}</h3>
            <div className='tech-grid'>
              {group.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className='tech-card'>
                    <div className='tech-icon-wrapper'>
                      <Icon className='tech-icon' />
                    </div>
                    <span className='tech-name'>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </ArticleWrapper>
  );
};
