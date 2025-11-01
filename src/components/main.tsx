import bookshelfWebstorage from '@/assets/images/bookshelf-webstorage.webp';
import chitChat from '@/assets/images/chit-chat.webp';
import covidTracker from '@/assets/images/covid-case-tracker.webp';
import cuanCalc2 from '@/assets/images/cuan-cal-v2.webp';
import cuanCalc from '@/assets/images/cuan-cal.webp';
import eatery from '@/assets/images/eatery.webp';
import personalWebsite from '@/assets/images/personal-website.webp';
import storyLife from '@/assets/images/story-life.webp';
import vanillaWebsite from '@/assets/images/vanilla-website.webp';
import NextImage from '@/components/next-image';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import React, { useState } from 'react';
import { DiScrum } from 'react-icons/di';
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { RiNextjsFill, RiGatsbyFill } from 'react-icons/ri';
import { SiVite, SiJira, SiQuarkus } from 'react-icons/si';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-tiny-toast';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
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
    const { name, email, message } = formData;
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
      to_name: 'Benni',
    };
    try {
      await emailjs.send(
        'service_wxn44nq',
        'template_800n62l',
        templateParams,
        {
          publicKey: 'rnx9Ku9msiIe7Rbkk',
        },
      );
      toast.show(
        <div>Success, Thank you for contacting me. I will reply asap.</div>,
        {
          position: 'top-center',
          timeout: 3000,
          pause: false,
          delay: 0,
          className: 'custom-react-tiny-toast',
        },
      );
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.show(<div>Something went wrong. Please try again.</div>, {
          position: 'top-center',
          timeout: 3000,
          pause: false,
          delay: 0,
          className: 'custom-react-tiny-toast',
        });
        return;
      }
    }
    resetForm();
  };

  const closeArticle = (
    <div
      className='close'
      onClick={() => {
        onCloseArticle();
      }}
      role='presentation'
    ></div>
  );

  return (
    <div
      ref={setWrapperRef}
      id='main'
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <ToastContainer />
      <article
        id='tech-stack'
        className={`${article === 'tech-stack' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>tech stack</h2>
        <div className='showcase-container stack'>
          <div className='icon-stack'>
            <RiNextjsFill /> Next.js
          </div>
          <div className='icon-stack'>
            <BiLogoSpringBoot /> Springboot
          </div>
          <div className='icon-stack'>
            <SiQuarkus /> Quarkus
          </div>
          <div className='icon-stack'>
            <RiGatsbyFill /> Gatsby
          </div>
          <div className='icon-stack'>
            <FaReact /> React.js
          </div>
          <div className='icon-stack'>
            <SiVite /> Vite
          </div>
          <div className='icon-stack'>
            <FaAngular /> Angular
          </div>
          <div className='icon-stack'>
            <IoLogoIonic /> Ionic
          </div>
          <div className='icon-stack'>
            <FaNodeJs /> Node.js
          </div>
          <div className='icon-stack'>
            <FaJs /> JavaScript
          </div>
          <div className='icon-stack'>
            <FaLaravel /> Laravel
          </div>
          <div className='icon-stack'>
            <FaHtml5 /> HTML5
          </div>
          <div className='icon-stack'>
            <FaCss3 /> CSS3
          </div>
          <div className='icon-stack'>
            <FaSass /> SASS
          </div>
          <div className='icon-stack'>
            <FaBootstrap /> Bootstrap
          </div>
          <div className='icon-stack'>
            <FaGitAlt /> Git
          </div>
          <div className='icon-stack'>
            <SiJira /> Jira
          </div>
          <div className='icon-stack'>
            <DiScrum /> Scrum
          </div>
        </div>
        {closeArticle}
      </article>
      <article
        id='education'
        className={`${article === 'education' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>Education</h2>
        <p>Maha Bodhi Elementary (2004 - 2010)</p>
        <p>Maha Bodhi Junior High School (2010 - 2013)</p>
        <p>Maha Bodhi Senior High School (2013 - 2016)</p>
        <p>Bina Nusantara University | Computer Science (2016 - 2020)</p>
        {closeArticle}
      </article>
      <article
        id='experience'
        className={`${article === 'experience' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>Experience</h2>
        <h3>Principal Engineer - AIA Singapore (March 2025 - Present)</h3>
        <ul className='row'>
          <li>
            Actively participating in the Elevate POSEZ project, contributing to
            both frontend and backend development. On the backend side, working
            with technologies such as Spring Boot and Quarkus to build scalable
            and efficient APIs and microservices.
          </li>
          <li>
            Mentoring and grooming frontend developers, providing guidance on
            coding best practices, component-based architecture, and system
            design specifically focused on frontend development.
          </li>
        </ul>
        <h3>
          Senior Software Engineer - AIA Singapore (February 2023 - February
          2025)
        </h3>
        <ul className='row'>
          <li>
            Collaborated with a diverse Business As Usual (BAU) team spanning
            Singapore, Malaysia, Indonesia, and China, focused on enhancing
            Straight-Through Processing (STP) rates and optimizing operational
            efficiency in ongoing processes.
          </li>
          <li>
            Actively contributed to Agile ceremonies, including daily stand-ups,
            sprint planning, reviews, and retrospectives, ensuring successful
            delivery of continuous improvements and maintenance tasks.
          </li>
          <li>
            Led the migration of a system from GatsbyJS to Next.js, resulting in
            significant improvements in page load performance. Developed
            reusable components that reduced the codebase by 20-30%, improving
            maintainability and reducing bug occurrence.
          </li>
          <li>
            Refactored legacy code to enhance readability, reduce complexity,
            and improve overall code quality, contributing to long-term
            sustainability.
          </li>
          <li>
            Integrated AIA Digital Feedback Survey, empowering business users
            with actionable insights to improve customer experience.
          </li>
          <li>
            Designed and implemented efficient, scalable code, ensuring smooth
            integration with third-party systems.
          </li>
          <li>
            Actively involved in System Integration Testing (SIT), User
            Acceptance Testing (UAT) support, and production support, ensuring
            timely resolution of issues and smooth deployment.
          </li>
          <li>
            Conducted thorough code reviews, advocating for industry best
            practices in development and testing to maintain high-quality code
            standards.
          </li>
        </ul>
        <h3>
          Software Engineer - AIA Singapore (November 2021 - February 2023)
        </h3>
        <ul className='row'>
          <li>
            Collaborated with a cross-functional Tribe team to drive
            improvements in the Straight-Through Processing (STP) rate,
            enhancing operational efficiency and reducing processing time.
          </li>
          <li>
            Analyzed product requirements and implemented improvements through
            code refactoring, optimizing performance, readability, and
            maintainability of the codebase.
          </li>
          <li>
            Integrated Adobe Analytics, enabling business users to access
            valuable insights and data, ultimately enhancing customer experience
            and driving data-driven decision-making.
          </li>
        </ul>
        <h3>
          Frontend Engineer - PT.Solusi Sinergi Digital / Surge (August 2020 -
          November 2021)
        </h3>
        <ul className='row'>
          <li>
            Developed and maintained the Content Management System (CMS) for the
            Linipoin App and Trivia Panel using the Angular framework, ensuring
            a seamless and user-friendly experience.
          </li>
          <li>
            Designed and implemented a simple quiz feature for Trivia,
            leveraging Angular for efficient development and smooth
            functionality.
          </li>
          <li>
            Maintained and optimized the Adakita web app built with ReactJS,
            ensuring high performance and responsiveness.
          </li>
          <li>
            Developed and maintained mobile applications for Linipoin and Sahabi
            using Ionic, ensuring cross-platform compatibility and optimal user
            experience.
          </li>
          <li>
            Implemented front-end web applications based on UI designs, adhering
            to best practices in UI/UX development.
          </li>
          <li>
            Ensured compatibility of web applications across different browsers
            and platforms, optimizing for performance and user accessibility.
          </li>
          <li>
            Proficient in integrating REST APIs into front-end applications,
            ensuring smooth communication between the client and server.
          </li>
        </ul>
        <h3>
          Frontend Engineer - PT.Raksasa Laju Lintang / Ralali (March 2019 -
          March 2020)
        </h3>
        <ul className='row'>
          <li>
            Implemented front-end web applications based on UI/UX designs,
            ensuring a visually appealing and user-friendly interface.
          </li>
          <li>
            Collaborated closely with UI/UX designers to refine designs,
            optimizing user experience by evaluating potential improvements and
            technical feasibility.
          </li>
          <li>
            Optimized web applications for performance, scalability, and
            responsiveness, ensuring fast load times and smooth user
            interactions.
          </li>
          <li>
            Ensured cross-browser and cross-platform compatibility for web
            applications, maintaining consistent performance across desktop and
            mobile devices.
          </li>
          <li>
            Actively participated in requirements gathering, design discussions,
            and code reviews, contributing to high-quality deliverables.
          </li>
          <li>
            Gained 1 year of experience working with modern front-end
            frameworks, including ReactJS, to build interactive and dynamic user
            interfaces.
          </li>
          <li>
            Proficient in integrating REST APIs into the front end, ensuring
            efficient data flow between client and server.
          </li>
          <li>
            Experienced in debugging website issues across different browsers
            and devices, ensuring seamless functionality and user experience.
          </li>
          <li>
            Familiar with Unit Testing (Jest & Cypress), Source Control
            Management (Git), and Scrum methodology, ensuring effective
            development and collaboration.
          </li>
        </ul>
        {closeArticle}
      </article>
      <article
        id='showcase'
        className={`${article === 'showcase' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>Showcase</h2>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://benni.my.id/'
              target='_blank'
              rel='noopener noreferrer'
            >
              My Personal Website
            </a>
          </h3>
          <NextImage
            useSkeleton
            src={personalWebsite}
            alt='personal-website'
            sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
            style={{ height: '100%', width: '100%', borderRadius: '4px' }}
          />
          <ul className='row-project'>
            <li>Built with Next.js 15</li>
            <li>Blazing fast loading times</li>
            <li>Custom 404 page</li>
            <li>TypeScript </li>
            <li>Eslint and Prettier </li>
            <li>Mobile responsive</li>
            <li>Component separated code</li>
            <li>Google analytics</li>
            <li>Progressive Web Apps / PWA</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://chit-chat-omega.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Chit Chat
            </a>
          </h3>
          <NextImage
            useSkeleton
            src={chitChat}
            alt='chit-chat'
            sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
            style={{ height: '100%', width: '100%', borderRadius: '4px' }}
          />
          <ul className='row-project'>
            <li>Built with React library</li>
            <li>Websocket using socket.io</li>
            <li>Custom component</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://cuan-calc-v2.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cuan calculator v2
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={cuanCalc2}
              alt='cuan-calc-2'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Built with Vite</li>
            <li>CSS framework using Tailwind</li>
            <li>Eslint for linting</li>
            <li>Mobile responsive</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            {/* <a
              href='https://bennibennibenni.github.io/covid-case-tracker/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Covid Case Tracker
            </a> */}
            Covid Case Tracker
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={covidTracker}
              alt='covid-tracker'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>ES6</li>
            <li>CSS framework using Bootstrap</li>
            <li>Webpack as module bundler</li>
            <li>Eslint for linting</li>
            <li>AJAX</li>
            <li>Mobile responsive</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://bennibennibenni.github.io/personal-website-vanilla-js/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Personal Website
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={vanillaWebsite}
              alt='vanilla-website'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Vanilla Javascript</li>
            <li>Semantic HTML</li>
            <li>Mobile responsive</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://eateryyy.netlify.app/#/home'
              target='_blank'
              rel='noopener noreferrer'
            >
              Eatery
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={eatery}
              alt='eatery'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Vanilla Javascript</li>
            <li>Eslint for linting</li>
            <li>Integration test with Karma</li>
            <li>E2E testing with Codecept</li>
            <li>Image Optimization with Imagemin</li>
            <li>Progressive Web Apps / PWA</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://bennibennibenni.github.io/bookshelf-webstorage/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bookshelf
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={bookshelfWebstorage}
              alt='bookshelf-webstorage'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Vanilla Javascript</li>
            <li>Web Storage</li>
            <li>Mobile responsive</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://story-life.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Story Life
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={storyLife}
              alt='story-life'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Built with Angular 10</li>
            <li>CSS framework using PaperCSS</li>
            <li>API from Dummyapi.io</li>
            <li>Progressive Web Apps / PWA</li>
          </ul>
        </div>
        <div className='project'>
          <h3 className='project-name'>
            <a
              href='https://cuan-calc.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cuan Calculator
            </a>
          </h3>
          <span>
            <NextImage
              useSkeleton
              src={cuanCalc}
              alt='cuan-calc'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
              style={{ height: '100%', width: '100%', borderRadius: '4px' }}
            />
          </span>
          <ul className='row-project'>
            <li>Build with GatsbyJS</li>
            <li>Mobile responsive</li>
            <li>Custom component using Styled Component</li>
          </ul>
        </div>
        {closeArticle}
      </article>
      <article
        id='contact'
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>Contact</h2>
        <form method='post' onSubmit={handleSubmit}>
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={(e) => handleChange('name', e)}
              required
            />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
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
              value={formData.message}
              onChange={(e) => handleChange('message', e)}
              required
            ></textarea>
          </div>
          <ul className='actions'>
            <li>
              <input type='submit' value='Send Message' className='special' />
            </li>
            <li>
              <input type='reset' value='Reset' onClick={resetForm} />
            </li>
          </ul>
        </form>
        <ul className='icons'>
          <li>
            <a
              href='https://github.com/bennibennibenni'
              className='icon fa-github'
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/bennixie/'
              className='icon fa-linkedin'
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        {closeArticle}
      </article>
    </div>
  );
};

export default Main;
