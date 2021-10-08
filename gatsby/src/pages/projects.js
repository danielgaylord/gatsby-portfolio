import React from 'react';
import styled from 'styled-components';

import pydoku from "../assets/images/pydoku-solver.png";
import blueprint from "../assets/images/nycdoe-cs4all-blueprint.png";
import portfolio from "../assets/images/gatsby-portfolio.png";

const ProjectStyles = styled.div`
  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    margin-top: 0rem;
    grid-gap: 2rem;
    justify-content: center;
  }
  .project {
    margin: 3rem;
    display: flex;
    border-radius: 25px;
    background-color: var(--lakeblue);
    background-size: 100%;
    background-position: center 6rem;
    background-repeat: no-repeat;
    padding: 0 0 4rem;
    animation: zoom-out 0.5s;
    & .project-desc {
      color: white;
      padding: 2rem;
      height: 100%;
      border-radius: 25px;
      background: transparent;
      transition: background 0.4s, opacity 0.4s;
    }
    & h4 {
      margin: -2rem -2rem 2rem;
      padding: 2rem;
      font-size: 2rem;
      font-weight: bold;
      border-radius: 25px 25px 0 0;
      text-align: center;
      background: var(--metalblue);
      z-index: 1;
    }
    & .project-text {
      font-size: 1.5rem;
      opacity: 0;
      transition: opacity 0.4s;
    }
    &:hover {
      animation: zoom-in 0.5s forwards;
      & .project-text {
        opacity: 1;
      }
      & .project-desc {
        background: var(--black);
      }
    }
  }
  a {
    color: var(--camelbrown)
  }
`;

export default function ProjectsPage() {
  return (
    <ProjectStyles>
      <div className="page-top center">
        <p className="headline">A sampling of personal and professional works</p>
        <p className="subtitle">Mostly done in my free time, when there's time.</p>
        <p>(Click to go to each project's respective GitHub repository)</p>
      </div>
      <div className="project-container">
        <button className="project" style={{ backgroundImage: "url(" + pydoku + ")" }} onClick={()=> window.open("https://github.com/danielgaylord/pydoku-solver", "_blank")}>
          <div className="project-desc">
            <h4>Sudoku Solver</h4>
            <p className="project-text">
              A quick project that algorithmicly solves Sudoku puzzles as I would 'by hand'. Doesn't (yet) include the ability to solve naked pairs.
            </p>
            <p className ="project-text"><strong>Language(s):</strong> Python</p>
            <p className ="project-text"><strong>Next Step(s):</strong> GUI, improve algorithm</p>
          </div>
        </button>
        <button className="project" style={{ backgroundImage: "url(" + blueprint + ")" }} onClick={()=> window.open("https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby", "_blank")}>
          <div className="project-desc">
            <h4>NYC DOE CS4All Blueprint</h4>
            <p className="project-text">
              Ported an older version of the <a href="https://github.com/nycdoe-cs4all/blueprint-learning-site" target="_blank" rel="noreferrer">CS4All Blueprint website</a> (not created by me) to GatsbyJS with a headless WordPress for faster load times and easier upkeep.
            </p>
            <p className ="project-text"><strong>Language(s):</strong> HTML, CSS, Javascript</p>
            <p className ="project-text"><strong>Libraries/Tools:</strong> GatsbyJS, React, Headless WordPress</p>
            <p className ="project-text"><strong>Next Step(s):</strong> Improving responsiveness, modularize code</p>
          </div>
        </button>
        <button className="project" style={{ backgroundImage: "url(" + portfolio + ")" }} onClick={()=> window.open("https://github.com/danielgaylord/gatsby-portfolio", "_blank")}>
          <div className="project-desc">
            <h4>Portfolio Website</h4>
            <p className="project-text">
              My personal portfolio page using GatsbyJS and Sanity. This site that you are viewing right now!
            </p>
            <p className ="project-text"><strong>Language(s):</strong> HTML, CSS, Javascript</p>
            <p className ="project-text"><strong>Libraries/Tools:</strong> GatsbyJS, React, Sanity</p>
            <p className ="project-text"><strong>Next Step(s):</strong> Improvements and tests, modals for projects</p>
          </div>
        </button>
      </div>
    </ProjectStyles>
  )
}