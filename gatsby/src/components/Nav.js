import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import background from '../assets/images/background.svg';

const NavStyles = styled.nav`
  padding: 3rem 15rem 3rem 11rem;
  flex-shrink: 0;
  box-shadow: 0 5px 25px 0px rgba(0,0,0,0.34);
  background-image: url(${background});
  background-size: 250px;
  background-attachment: fixed;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
  .home {
    grid-column: 1;
  }
  .links {
    grid-column: 2;
    grid-gap: 2rem;
  }
  a {
    font-size: 4rem;
    font-weight: bold;
    text-decoration: none;
    
    &:hover {
      color: var(--curryorange);
    }
  }
  img {
    width: 8rem;
    animation: zoom-out 0.5s forwards;
    &:hover {
      animation: zoom-in 0.5s forwards;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 10rem 2rem 7rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 5rem 1rem 3rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="flexbar">
        <div className="home flexpart">
          <Link to="/">
            <StaticImage src="../assets/images/logo2-die.png" alt="Dan Gaylord Logo"/>
          </Link>
        </div>
        <ul className="links flexpart">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="jiggle">
            <Link to="/musings">Musings</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}
