import dynamic from 'next/dynamic';
import React from 'react';

// Code-split article panels: they stay hidden until opened, so they must not
// ship in the initial bundle (contact pulls @emailjs/browser, tech-stack and
// showcase pull dozens of react-icons).
const TechStackArticle = dynamic(() =>
  import('@/components/articles/tech-stack-article').then(
    (mod) => mod.TechStackArticle,
  ),
);
const EducationArticle = dynamic(() =>
  import('@/components/articles/education-article').then(
    (mod) => mod.EducationArticle,
  ),
);
const ExperienceArticle = dynamic(() =>
  import('@/components/articles/experience-article').then(
    (mod) => mod.ExperienceArticle,
  ),
);
const ShowcaseArticle = dynamic(() =>
  import('@/components/articles/showcase-article').then(
    (mod) => mod.ShowcaseArticle,
  ),
);
const ContactArticle = dynamic(() =>
  import('@/components/articles/contact-article').then(
    (mod) => mod.ContactArticle,
  ),
);

const articleComponents = {
  'tech-stack': TechStackArticle,
  education: EducationArticle,
  experience: ExperienceArticle,
  showcase: ShowcaseArticle,
  contact: ContactArticle,
} as const;

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
  const ActiveArticle =
    article && article in articleComponents
      ? articleComponents[article as keyof typeof articleComponents]
      : null;

  return (
    <div
      ref={setWrapperRef}
      id='main'
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      {ActiveArticle && (
        <ActiveArticle
          activeArticle={article}
          articleTimeout={articleTimeout}
          onClose={onCloseArticle}
        />
      )}
    </div>
  );
};

export default Main;
