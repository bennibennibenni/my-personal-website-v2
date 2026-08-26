import React from 'react';

interface FooterProps {
  timeout: boolean;
}

const Footer: React.FC<FooterProps> = ({ timeout }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer' style={timeout ? { display: 'none' } : {}}>
      <p className='copyright'>
        &copy; {currentYear} Benni. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
