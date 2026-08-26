import React from 'react';

import { ContactArticle } from '@/components/articles/contact-article';
import { EducationArticle } from '@/components/articles/education-article';
import { ExperienceArticle } from '@/components/articles/experience-article';
import { ShowcaseArticle } from '@/components/articles/showcase-article';
import { TechStackArticle } from '@/components/articles/tech-stack-article';

interface MainProps {
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
  setWrapperRef?: (node: HTMLDivElement | null) => void;
}

const Main: React.FC<MainProps> = ({
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
  setWrapperRef,
}) => {
  return (
    <div
      ref={setWrapperRef}
      id='main'
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <TechStackArticle
        activeArticle={article}
        articleTimeout={articleTimeout}
        onClose={onCloseArticle}
      />
      <EducationArticle
        activeArticle={article}
        articleTimeout={articleTimeout}
        onClose={onCloseArticle}
      />
      <ExperienceArticle
        activeArticle={article}
        articleTimeout={articleTimeout}
        onClose={onCloseArticle}
      />
      <ShowcaseArticle
        activeArticle={article}
        articleTimeout={articleTimeout}
        onClose={onCloseArticle}
      />
      <ContactArticle
        activeArticle={article}
        articleTimeout={articleTimeout}
        onClose={onCloseArticle}
      />
    </div>
  );
};

export default Main;
