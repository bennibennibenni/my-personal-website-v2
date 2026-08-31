'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiMaximize2, FiX } from 'react-icons/fi';

import { showcaseData } from '@/data/showcase';

import NextImage from '@/components/next-image';

import { ArticleWrapper } from './article-wrapper';

interface ShowcaseArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

interface PreviewImageState {
  src: StaticImageData | string;
  alt: string;
  title: string;
}

export const ShowcaseArticle: React.FC<ShowcaseArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageState | null>(null);
  const [isPreviewLoaded, setIsPreviewLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenPreview = (imgState: PreviewImageState) => {
    setIsPreviewLoaded(false);
    setPreviewImage(imgState);
  };

  const handleClosePreview = useCallback(() => {
    setPreviewImage(null);
    setIsPreviewLoaded(false);
  }, []);

  // Lock scroll when preview lightbox is open
  useEffect(() => {
    if (previewImage) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClosePreview();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [previewImage, handleClosePreview]);

  // Pre-cache all showcase images in the background on mount or idle time
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadShowcaseImages = () => {
      showcaseData.forEach((project) => {
        if (typeof project.image === 'object' && project.image?.src) {
          const img = new window.Image();
          img.src = project.image.src;
        }
      });
    };

    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(preloadShowcaseImages, {
        timeout: 2000,
      });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preloadShowcaseImages, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <ArticleWrapper
        id='showcase'
        title='Showcase'
        activeArticle={activeArticle}
        articleTimeout={articleTimeout}
        onClose={onClose}
      >
        <div className='showcase-timeline'>
          {showcaseData.map((project, index) => (
            <div key={project.title} className='project showcase-item'>
              <h3 className='project-name'>
                {project.url ? (
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>
              <div
                className='showcase-image-container'
                onClick={() =>
                  handleOpenPreview({
                    src: project.image,
                    alt: project.alt,
                    title: project.title,
                  })
                }
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenPreview({
                      src: project.image,
                      alt: project.alt,
                      title: project.title,
                    });
                  }
                }}
                aria-label={`Preview ${project.title} screenshot`}
              >
                <NextImage
                  useSkeleton
                  src={project.image}
                  alt={project.alt}
                  sizes='(max-width: 768px) 100vw, 800px'
                  quality={85}
                  priority={index < 2}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '4px',
                  }}
                />
                <div className='showcase-image-overlay'>
                  <span className='showcase-image-badge'>
                    <FiMaximize2 size={13} />
                    <span>Preview</span>
                  </span>
                </div>
              </div>
              <ul className='row-project'>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ArticleWrapper>

      {mounted &&
        previewImage &&
        createPortal(
          <div
            className='image-preview-backdrop'
            onClick={handleClosePreview}
            role='dialog'
            aria-modal='true'
            aria-label={`${previewImage.title} Preview`}
          >
            <div
              className='image-preview-content'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='image-preview-header'>
                <h4 className='image-preview-title'>{previewImage.title}</h4>
                <div className='image-preview-actions'>
                  <span className='image-preview-hint'>ESC to close</span>
                  <button
                    type='button'
                    className='image-preview-close'
                    onClick={handleClosePreview}
                    aria-label='Close preview'
                  >
                    <FiX />
                  </button>
                </div>
              </div>
              <div className='image-preview-img-wrapper'>
                {!isPreviewLoaded && (
                  <div className='image-preview-skeleton' aria-hidden='true'>
                    <div className='image-preview-spinner' />
                  </div>
                )}
                <Image
                  src={previewImage.src}
                  alt={previewImage.alt}
                  quality={95}
                  priority
                  className={`image-preview-img ${
                    isPreviewLoaded ? 'image-loaded' : 'image-loading'
                  }`}
                  onLoad={() => setIsPreviewLoaded(true)}
                  placeholder={
                    typeof previewImage.src === 'object' &&
                    'blurDataURL' in previewImage.src
                      ? 'blur'
                      : undefined
                  }
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
