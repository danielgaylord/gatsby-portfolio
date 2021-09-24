import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bio">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/collection">Games</Link>
        </li>
        <li>
          <Link to="/musings">Musings</Link>
        </li>
      </ul>
    </>
  );
}
