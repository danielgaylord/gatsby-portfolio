import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const BioStyles = styled.div`
  img {
    border-radius: 50%;
  }
  .bio-pic {
    float: left;
    width: 30%;
    margin: 2rem;
  }
  .bio-text {
    float: right;
    width: 60%;
  }

  @media screen and (max-width: 960px) {
    .bio-pic {
      float: none;
      margin: auto;
      width: 50%;
    }
    .bio-text {
      float: none;
      margin: auto;
      width: 90%;
    }
  }
`;

export default function BioPage() {
  return (
    <BioStyles>
      <div className="page-top center">
        <p className="headline">Let's take a trip down memory lane...</p>
      </div>
      <div className="bio-content">
        <div className="bio-pic">
          <StaticImage src="../assets/images/DanDanCyberPunkMan.jpg" alt="Unprofessional Profile Picture"/>
        </div>
        <div className="bio-text">
          <p>My name is Daniel Gaylord, Jersey-raised, but proudly calling NYC my current home. Always being interested in how things work no doubt led me to what I do today, both at my 'day job' and in my free time.</p>
          <p>Currently I act as the Interim Academic Strategy Lead for the <a href="https://cs4all.nyc" target="_blank" rel="noreferrer">New York City Department of Education's Computer Science for All (CS4All) team</a>. I use my background as both a computer science major and a computer science high school teacher to bring the joy and wonder of algorithms, programming, and abstract thinking to NYC teachers so they can prepare their students to be the next wave of future developers.</p>
          <p>As an example of bringing both of my passions together, I took it upon myself to lead the work in porting our <a href="https://www.blueprint.cs4all.nyc/" target="_blank" rel="noreferrer">Blueprint</a> website to <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">GatsbyJS</a> with a <a href="https://www.gatsbyjs.com/docs/glossary/headless-wordpress/#:~:text=A%20headless%20WordPress%20site%20is,content%20to%20a%20site%20visitor." target="_blank" rel="noreferrer">headless WordPress</a> backend. Other than this project and the site you are reading now, I've dabbled in many different languages to keep my coding skills as up-to-date as possible (and it's always fun learning new things).</p>
          <p>My next project always seems to be in flux, but currently it's to go back to where it all began. Gaming got me into programming, so it only makes sense to try to make one myself...</p>
          <p>For more about me, check out my <a href="https://www.linkedin.com/in/danielgaylord/" target="_blank" rel="noreferrer">LinkedIn profile</a> or my <a href="https://drive.google.com/file/d/1vIN8a65RdZZgJJANa5e30Ia6ullVGZuk/view?usp=sharing" target="_blank" rel="noreferrer">general resume</a>.</p>
        </div>
      </div>
    </BioStyles>
  )
}