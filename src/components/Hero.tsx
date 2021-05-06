import meImg from '../assets/images/me.jpg';
import socialMediaLinks from '../constants/socialMediaLinks';
import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Paola Aguilar</h1>
            <h4>I am a Frontend developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialMediaLinks.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <div className="hero-div">
          <img src={meImg} alt="portafolio" />
        </div>
      </section>
    </header>
  );
};

export default Hero;
