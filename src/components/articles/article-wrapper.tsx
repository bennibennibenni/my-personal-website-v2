import React from 'react';

interface ArticleWrapperProps {
  id: string;
  title: string;
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ArticleWrapper: React.FC<ArticleWrapperProps> = ({
  id,
  title,
  activeArticle,
  articleTimeout,
  onClose,
  children,
}) => {
  const isActive = activeArticle === id;

  return (
    <article
      id={id}
      className={`${isActive ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className='major'>{title}</h2>
      {children}
      <div
        className='close'
        onClick={onClose}
        role='presentation'
        aria-label={`Close ${title}`}
      />
    </article>
  );
};
