import React from 'react';

interface FooterProps {
  timeout: boolean;
}

const Footer: React.FC<FooterProps> = ({ timeout }) => {
  return (
    <footer id='footer' style={timeout ? { display: 'none' } : {}}>
      <p className='copyright'>Copyright &copy; 2025. BENNI </p>
    </footer>
  );
};

export default Footer;
