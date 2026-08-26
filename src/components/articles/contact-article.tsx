import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiRotateCcw,
  FiSend,
  FiX,
} from 'react-icons/fi';

import { socialData } from '@/data/socials';

import { ArticleWrapper } from './article-wrapper';

interface ContactArticleProps {
  activeArticle: string;
  articleTimeout: boolean;
  onClose: () => void;
}

export const ContactArticle: React.FC<ContactArticleProps> = ({
  activeArticle,
  articleTimeout,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    title: string;
    message: string;
  } | null>(null);

  const handleChange = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    const templateParams = {
      from_name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      to_name: 'Benni',
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service configuration is missing.');
      }

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });
      setNotification({
        type: 'success',
        title: 'MESSAGE SENT SUCCESSFULLY!',
        message: "Thank you for getting in touch. I'll get back to you soon.",
      });
      resetForm();
    } catch (err) {
      setNotification({
        type: 'error',
        title: 'SOMETHING WENT WRONG',
        message:
          err instanceof EmailJSResponseStatus
            ? 'Failed to deliver message. Please try again later.'
            : 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ArticleWrapper
      id='contact'
      title='Contact'
      activeArticle={activeArticle}
      articleTimeout={articleTimeout}
      onClose={onClose}
    >
      <p className='contact-intro'>
        Have a project in mind, an opportunity to discuss, or just want to say
        hello? Send me a message below or connect with me directly!
      </p>

      {notification && (
        <div
          className={`contact-notification ${
            notification.type === 'error' ? 'error' : ''
          }`}
          role='alert'
        >
          <div className='notification-content'>
            <div className='notification-icon'>
              {notification.type === 'success' ? (
                <FiCheckCircle />
              ) : (
                <FiAlertCircle />
              )}
            </div>
            <div className='notification-text'>
              <span className='notification-title'>{notification.title}</span>
              <span className='notification-message'>
                {notification.message}
              </span>
            </div>
          </div>
          <button
            type='button'
            className='notification-close'
            onClick={() => setNotification(null)}
            aria-label='Close notification'
          >
            <FiX />
          </button>
        </div>
      )}

      <form method='post' onSubmit={handleSubmit}>
        <div className='field half first'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your name'
            autoComplete='name'
            value={formData.name}
            onChange={(e) => handleChange('name', e)}
            required
          />
        </div>
        <div className='field half'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='your.email@example.com'
            autoComplete='email'
            value={formData.email}
            onChange={(e) => handleChange('email', e)}
            required
          />
        </div>
        <div className='field'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            rows={4}
            placeholder='Write your message here...'
            value={formData.message}
            onChange={(e) => handleChange('message', e)}
            required
          ></textarea>
        </div>
        <ul className='actions'>
          <li>
            <button
              type='submit'
              className='special btn-send'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className='spinner' />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiSend className='btn-icon' />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn-reset'
              onClick={resetForm}
              disabled={isSubmitting}
            >
              <FiRotateCcw className='btn-icon' />
              <span>Reset</span>
            </button>
          </li>
        </ul>
      </form>

      <div className='contact-social-section'>
        <ul className='icons contact-icons'>
          {socialData.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.name}>
                <a
                  href={social.url}
                  className={social.className}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ArticleWrapper>
  );
};
