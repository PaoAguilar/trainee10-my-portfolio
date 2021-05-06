import about from '../constants/about';
import meImg from '../assets/images/me.jpg';
import Title from '../components/Title';
import React from 'react';

const About = () => {
  const { title, info, stack } = about;
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={meImg} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
