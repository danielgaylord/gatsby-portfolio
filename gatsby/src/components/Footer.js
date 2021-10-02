import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const FooterStyles = styled.footer`
  margin-top: 3rem;
  padding: 5rem 30rem 3rem;
  background: var(--slategrey);
  flex-shrink: 0;
  color: white;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
  .footbar {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
  .footpart {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .social {
    grid-column: 2;
    grid-gap: 1rem;
  }
  img {
    width: 4rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div class="footbar">
        <p class="copy footpart">&copy; Dan Gaylord {new Date().getFullYear()}</p>
        <ul class="social footpart">
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
    </FooterStyles>
  );
}
