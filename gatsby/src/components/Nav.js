import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  padding: 5rem 15rem;
  flex-shrink: 0;
  box-shadow: 0 5px 25px 0px rgba(0,0,0,0.34);

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
  .home {
    grid-column: 1;
  }
  .links {
    grid-column: 2;
    grid-gap: 2rem;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--lakeblue);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div class="navbar">
        <div class="home navpart">
        <Link to="/"><strong>Dan Gaylord</strong></Link>
        </div>
        <ul class="links navpart">
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
      </div>
    </NavStyles>
  );
}
