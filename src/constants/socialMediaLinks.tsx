import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/paola-aguilar-8249b31b7/',
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: 'https://github.com/PaoAguilar',
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: 'https://twitter.com/PaoAguilar09',
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/nenee.aguilar/',
  },
];

export default data;
