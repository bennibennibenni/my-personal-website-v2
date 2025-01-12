'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import '@/lib/env';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Layout from '@/components/layout';
import Main from '@/components/main';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const pathname = usePathname();

  // State management using useState hook
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  // Reference to the wrapper element
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Function to set the wrapper ref
  const setWrapperRef = (node: HTMLDivElement | null) => {
    wrapperRef.current = node;
  };

  const handleCloseArticle = React.useCallback(() => {
    if (!articleTimeout) {
      return;
    }
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

  // Equivalent of componentDidMount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);
    // Add event listener for clicks outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !isArticleVisible &&
        event.target instanceof HTMLElement &&
        !wrapperRef.current.contains(event.target)
      ) {
        if (isArticleVisible) {
          handleCloseArticle();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup on unmount (componentWillUnmount equivalent)
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isArticleVisible, handleCloseArticle]);

  // Handlers for opening and closing articles
  const handleOpenArticle = (article: string) => {
    if (isArticleVisible) {
      return;
    }
    setIsArticleVisible(true);
    setArticle(article);
    setTimeout(() => {
      setTimeoutState(true);
      window.scrollTo(0, 0);
    }, 325);
    setTimeout(() => {
      setArticleTimeout(true);
    }, 350);
  };

  return (
    <Layout location={pathname}>
      <>
        <div className='page-bg'>
          <div className='animation-wrapper'>
            <div className='particle particle-1'></div>
          </div>
        </div>
        <div
          className={`body ${loading} ${
            isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id='wrapper' ref={wrapperRef}>
            <Header timeout={timeout} handleOpenArticle={handleOpenArticle} />
            <Main
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={handleCloseArticle}
              setWrapperRef={setWrapperRef}
            />
            {/* <Page></Page> */}
            <Footer timeout={timeout} />
          </div>
        </div>
      </>
    </Layout>
  );
}
