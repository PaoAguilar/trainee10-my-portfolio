import Title from '../components/Title';
import studies from '../constants/education';
import React from 'react';

const Education = () => {
  return (
    <section className="section bg-grey">
      <Title title="education"></Title>
      <div className="section-center services-center">
        {studies.map((education) => {
          const { id, icon, title, text } = education;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
