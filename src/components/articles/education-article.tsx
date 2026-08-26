import React from 'react';

import { educationData } from '@/data/education';

import { ArticleWrapper } from './article-wrapper';

interface EducationArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

export const EducationArticle: React.FC<EducationArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  return (
    <ArticleWrapper
      id='education'
      title='Education'
      activeArticle={activeArticle}
      articleTimeout={articleTimeout}
      onClose={onClose}
    >
      <div className='education-timeline'>
        {educationData.map((edu) => (
          <div
            className='education-item'
            key={`${edu.school}-${edu.period}`}
          >
            <div className='education-header'>
              <h3>
                {edu.school}
                {edu.major ? ` • ${edu.major}` : ''}
              </h3>
              <span className='education-period'>{edu.period}</span>
            </div>
            {edu.degree && (
              <p className='education-degree'>{edu.degree}</p>
            )}
            {edu.highlights && edu.highlights.length > 0 && (
              <ul className='row'>
                {edu.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </ArticleWrapper>
  );
};
