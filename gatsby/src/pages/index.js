import React from 'react';
import styled from 'styled-components';

const IndexStyles = styled.div`
  .call-out {
    font-size: 5rem;
    font-weight: bold;
  }

  .dive-in {
    & p:nth-child(2) {
      text-align: center;
    }
    & p:nth-child(3) {
      text-align: right;
    }
  }
`;

export default function HomePage() {
  return (
    <IndexStyles>
      <div class="page-top center">
          <p class="headline">Hey, Dan here. Welcome to my website!</p>
          <p class="subtitle">Sit down, grab a beverage, and join me.</p>
      </div>
      <hr/>
      <div>
        <p class="call-out center">Educator by day, tinkerer by night, full day problem-solver.</p>
        <div class="dive-in">
          <p>Once a computer scientist, always a computer scientist.</p>
          <p>NYC-based with a passion for technologys and learning.</p>
          <p>Always looking forward to where life will lead me next.</p>
        </div>
      </div>
    </IndexStyles>
  )
}
