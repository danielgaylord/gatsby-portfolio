import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 3rem 30rem 3rem;
  background: var(--slategrey);
  flex: 0 1 auto;
  color: white;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
  .social {
    grid-column: 2;
    grid-gap: 1rem;
  }
  img {
    width: 4rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 20rem 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 10rem 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="flexbar">
        <p className="copy flexpart">&copy; Dan Gaylord {new Date().getFullYear()}</p>
        <ul className="social flexpart">
          <li className="jiggle">
            <a href="https://www.facebook.com/danielgaylord7" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/Facebook-64px.png" alt="Facebook Logo"/></a>
          </li>
          <li className="jiggle">
            <a href="https://www.linkedin.com/in/danielgaylord/" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/Linkedin-64px.png" alt="Linkedin Logo"/></a>
          </li>
          <li className="jiggle">
            <a href="https://github.com/danielgaylord" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/GitHub-Mark-64px.png" alt="GitHub Logo"/></a>
          </li>
          <li className="jiggle">
            <a href="mailto:danielgaylord@gmail.com" target="_blank" rel="noreferrer"><StaticImage src="../assets/images/icons8-gmail-64.png" alt="Gmail Logo"/></a>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
}
