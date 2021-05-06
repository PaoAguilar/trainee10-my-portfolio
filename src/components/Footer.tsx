import socialLinks from '../constants/socialMediaLinks';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="social-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
        <h4>copyright &copy; 2021</h4>
      </div>
    </footer>
  );
};

export default Footer;
