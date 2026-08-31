'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  FiMaximize2,
  FiRotateCcw,
  FiX,
  FiZoomIn,
  FiZoomOut,
} from 'react-icons/fi';

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
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenPreview = (imgState: PreviewImageState) => {
    setIsPreviewLoaded(false);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
    setPreviewImage(imgState);
  };

  const handleClosePreview = useCallback(() => {
    setPreviewImage(null);
    setIsPreviewLoaded(false);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(Number((prev + 0.5).toFixed(2)), 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(2)), 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleToggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomScale === 1) {
      setZoomScale(2);
    } else {
      setZoomScale(1);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoomScale((prev) => Math.min(Number((prev + 0.25).toFixed(2)), 3));
    } else {
      setZoomScale((prev) => {
        const next = Math.max(Number((prev - 0.25).toFixed(2)), 1);
        if (next === 1) setPanPosition({ x: 0, y: 0 });
        return next;
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomScale > 1) {
      e.preventDefault();
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomScale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panPosition.x,
        y: e.touches[0].clientY - panPosition.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoomScale > 1 && e.touches.length === 1) {
      setPanPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Lock scroll and register keyboard shortcuts when preview lightbox is open
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
        } else if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          setZoomScale((prev) => Math.min(Number((prev + 0.5).toFixed(2)), 3));
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          setZoomScale((prev) => {
            const next = Math.max(Number((prev - 0.5).toFixed(2)), 1);
            if (next === 1) setPanPosition({ x: 0, y: 0 });
            return next;
          });
        } else if (e.key === '0') {
          e.preventDefault();
          setZoomScale(1);
          setPanPosition({ x: 0, y: 0 });
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
                  <div className='image-preview-toolbar'>
                    <div className='image-preview-btn-group'>
                      <button
                        type='button'
                        className='image-preview-btn'
                        onClick={handleZoomOut}
                        disabled={zoomScale <= 1}
                        title='Zoom Out (-)'
                        aria-label='Zoom Out'
                      >
                        <FiZoomOut />
                      </button>
                      <span className='image-preview-zoom-label'>
                        {Math.round(zoomScale * 100)}%
                      </span>
                      <button
                        type='button'
                        className='image-preview-btn'
                        onClick={handleZoomIn}
                        disabled={zoomScale >= 3}
                        title='Zoom In (+)'
                        aria-label='Zoom In'
                      >
                        <FiZoomIn />
                      </button>
                    </div>
                    {zoomScale > 1 && (
                      <button
                        type='button'
                        className='image-preview-btn'
                        onClick={handleResetZoom}
                        title='Reset Zoom (0)'
                        aria-label='Reset Zoom'
                      >
                        <FiRotateCcw />
                      </button>
                    )}
                  </div>
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
              <div
                className={`image-preview-img-wrapper ${
                  zoomScale > 1 ? 'is-zoomed' : ''
                } ${isDragging ? 'is-dragging' : ''}`}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onDoubleClick={handleToggleZoom}
                title={
                  zoomScale > 1
                    ? 'Drag to pan / Double click to reset'
                    : 'Double click or scroll to zoom'
                }
              >
                {!isPreviewLoaded && (
                  <div className='image-preview-skeleton' aria-hidden='true'>
                    <div className='image-preview-spinner' />
                  </div>
                )}
                <div
                  style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomScale})`,
                    transition: isDragging
                      ? 'none'
                      : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    willChange: 'transform',
                  }}
                >
                  <Image
                    src={previewImage.src}
                    alt={previewImage.alt}
                    quality={95}
                    priority
                    draggable={false}
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
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
