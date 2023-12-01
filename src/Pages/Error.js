import React from 'react'
import "../Styles/Pages/Error.scss"
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h2>404</h2>
      <h3>page not found</h3>
      <p>
        The page you are looking for might have been removed has it change or
        temporarily unavailable.
      </p>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default Error