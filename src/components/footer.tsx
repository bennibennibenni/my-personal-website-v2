import React from 'react';

interface FooterProps {
  timeout: boolean;
}

const Footer: React.FC<FooterProps> = ({ timeout }) => {
  return (
    <footer id='footer' style={timeout ? { display: 'none' } : {}}>
      <p className='copyright'>&copy; 2026 Benni. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
