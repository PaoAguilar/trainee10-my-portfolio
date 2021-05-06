import React from 'react';
import { Link } from 'gatsby';

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>Page Error!!</h1>
          <Link to="/" className="btn">
            Go back Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
