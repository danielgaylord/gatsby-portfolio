import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
  .navbar {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
  .navpart {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .links {
    grid-column: 1;
    grid-gap: 2rem;
  }
  .social {
    grid-column: 2;
    grid-gap: 1rem;
  }
  img {
    width: 4rem;
  }
  .jiggle:hover {
    transform: rotate(4deg);
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div class="navbar">
        <ul class="links navpart">
          <li>
            <Link to="/"><strong>Home</strong></Link>
          </li>
          <li>
            <Link to="/projects"><strong>Projects</strong></Link>
          </li>
          <li class="jiggle">
            <Link to="/musings"><strong>Musings</strong></Link>
          </li>
          <li>
            <Link to="/bio"><strong>Bio</strong></Link>
          </li>
        </ul>
        <ul class="social navpart">
          <li class="jiggle">
            <a href="https://www.facebook.com/danielgaylord7" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/Facebook-64px.png" alt="Facebook Logo"/></a>
          </li>
          <li class="jiggle">
            <a href="https://www.linkedin.com/in/danielgaylord/" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/Linkedin-64px.png" alt="Linkedin Logo"/></a>
          </li>
          <li class="jiggle">
            <a href="https://github.com/danielgaylord" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/GitHub-Mark-64px.png" alt="GitHub Logo"/></a>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}
