'use client';

import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import '@/lib/env';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Layout from '@/components/layout';
import Main from '@/components/main';

export default function HomePage() {
  const pathname = usePathname();

  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseArticle = useCallback(() => {
    if (!articleTimeout) return;

    setArticleTimeout(false);
    setTimeout(() => {
      setTimeoutState(false);
      window.scrollTo(0, 0);
    }, 325);
    setTimeout(() => {
      setIsArticleVisible(false);
      setArticle('');
    }, 350);
  }, [articleTimeout]);

  const handleOpenArticle = (targetArticle: string) => {
    if (isArticleVisible) return;

    setIsArticleVisible(true);
    setArticle(targetArticle);
    setTimeout(() => {
      setTimeoutState(true);
      window.scrollTo(0, 0);
    }, 325);
    setTimeout(() => {
      setArticleTimeout(true);
    }, 350);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);

    const handleClickOutside = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (!isArticleVisible || !modalRef.current) return;

      // Ignore clicks on browser scrollbars
      const isScrollbarClick =
        event.clientX >= document.documentElement.clientWidth ||
        event.clientY >= document.documentElement.clientHeight;

      if (isScrollbarClick) return;

      if (
        event.target instanceof HTMLElement &&
        !modalRef.current.contains(event.target)
      ) {
        handleCloseArticle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isArticleVisible, handleCloseArticle]);

  return (
    <Layout location={pathname}>
      <div className='page-bg'>
        <div className='animation-wrapper'>
          <div className='particle particle-1' />
          <div className='particle particle-2' />
          <div className='particle particle-3' />
          <div className='particle particle-4' />
        </div>
      </div>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id='wrapper'>
          <Header
            timeout={timeoutState}
            handleOpenArticle={handleOpenArticle}
          />
          <Main
            timeout={timeoutState}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={(node) => {
              modalRef.current = node;
            }}
          />
          <Footer timeout={timeoutState} />
        </div>
      </div>
    </Layout>
  );
}
