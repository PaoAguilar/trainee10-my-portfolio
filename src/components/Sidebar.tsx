import links from '../constants/links';
import socialLinks from '../constants/socialMediaLinks';
import { Link } from 'gatsby';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: (open: boolean) => void;
}) => {
  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? 'sidebar-links' : ''}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={isOpen ? 'social-links sidebar-icons' : ''}>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="social-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
