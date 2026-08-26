import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { SocialItem } from '@/types/portfolio';

export const socialData: SocialItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/bennibennibenni',
    className: 'icon fa-github',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benni-0b6016142/',
    className: 'icon fa-linkedin',
    icon: FaLinkedin,
  },
];
