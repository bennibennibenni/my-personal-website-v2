import React from 'react';

import { experienceData } from '@/data/experience';

import { ArticleWrapper } from './article-wrapper';

interface ExperienceArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

export const ExperienceArticle: React.FC<ExperienceArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  return (
    <ArticleWrapper
      id='experience'
      title='Experience'
      activeArticle={activeArticle}
      articleTimeout={articleTimeout}
      onClose={onClose}
    >
      <div className='experience-timeline'>
        {experienceData.map((exp) => (
          <div
            className='experience-item'
            key={`${exp.company}-${exp.role}-${exp.period}`}
          >
            <div className='experience-header'>
              <h3>
                {exp.role} • {exp.company}
              </h3>
              <span className='experience-period'>{exp.period}</span>
            </div>
            <ul className='row'>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ArticleWrapper>
  );
};
