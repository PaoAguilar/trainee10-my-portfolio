import socialMediaLinks from '../constants/socialMediaLinks';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>CONTACT ME</h3>
        <div className="underline"></div>
        <p>
          If you wanna get in touch, you can send an email to <span>pao.aquev29@gmail.com</span> and
          lets talk.
        </p>
        <p>Also you can contact me trough my social media</p>
        <div className="footer-links social-links">
          {socialMediaLinks.map((link) => {
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
      </article>
    </section>
  );
};

export default Contact;
