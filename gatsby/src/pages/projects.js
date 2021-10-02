import React from 'react';
import styled from 'styled-components';
//import { StaticImage } from "gatsby-plugin-image";

import pydoku from "../assets/images/pydoku-solver.png";
import blueprint from "../assets/images/nycdoe-cs4all-blueprint.png";
import portfolio from "../assets/images/gatsby-portfolio.png";

const ProjectStyles = styled.div`
  .page-top {
    width: 75%;
    margin: auto;
    text-align: center;
  }
  .headline {
    font-size: 36px;
  }
  .subtitle {
    font-size: 24px;
  }
  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0rem;
    grid-gap: 2rem;
  }
  .project {
    margin: 3rem;
    display: flex;
    border-radius: 25px;
    background-size: cover;
    background-position: 50% 50%;
    padding: 0 0 32px;
    justify-content: center;
    animation: zoom-out 0.5s;
    & .project-desc {
      color: white;
      padding: 16px;
      height: 100%;
      border-radius: 25px;
      background: transparent;
      transition: background 0.4s, opacity 0.4s;
    }
    & h4 {
      margin: -16px -16px 16px;
      padding: 16px;
      border-radius: 25px 25px 0 0;
      text-align: center;
      background: black;
      z-index: 1;
    }
    & .project-text {
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.4s;
    }
    &:hover {
      animation: zoom-in 0.5s forwards;
      & .project-text {
        opacity: 1;
      }
      & .project-desc {
        background: black;
      }
    }
  }
`;

export default function ProjectsPage() {
  return (
    <ProjectStyles>
      <div class="page-top">
        <p class="headline">A sampling of personal and professional works</p>
        <p class="subtitle">Click on a project to learn more about it.</p>
      </div>
      <div class="project-container">
        <div class="project" style={{ backgroundImage: "url(" + pydoku + ")" }}>
          <div class="project-desc">
            <h4>Sudoku Solver</h4>
            <span class="project-text">
              A quick project where I used python to solve Sudoku puzzles as 'I do'. Doesn't (yet) include an algorith to solve naked pairs.
            </span>
          </div>
        </div>
        <div class="project" style={{ backgroundImage: "url(" + blueprint + ")" }}>
          <div class="project-desc">
            <h4>NYC DOE CS4All Blueprint</h4>
            <span class="project-text">
              Ported the old Blueprint website (not created by me) to GatsbyJS with a headless WordPress for faster load times and easier upkeep.
            </span>
          </div>
        </div>
        <div class="project" style={{ backgroundImage: "url(" + portfolio + ")" }}>
          <div class="project-desc">
            <h4>Portfolio Website</h4>
            <span class="project-text">
              My personal portfolio page using GatsbyJS and Sanity. This site that you are viewing right now!
            </span>
          </div>
        </div>
      </div>
    </ProjectStyles>
  )
}