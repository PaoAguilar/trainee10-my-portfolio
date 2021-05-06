import Title from './Title';
import experiences from '../constants/experience';
import React from 'react';
import { Link } from 'gatsby';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Experience = () => {
  const [value, setValue] = React.useState(0);
  const { position, company, date, description } = experiences[value];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {experiences.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-ion"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Experience;
