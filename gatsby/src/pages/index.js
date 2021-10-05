import React from 'react';
import styled from 'styled-components';

const IndexStyles = styled.div`
`;

export default function HomePage() {
  return (
    <IndexStyles>
      <div className="page-top center">
          <p className="headline">Hey, Dan here. Welcome to my website!</p>
          <p className="subtitle">Sit down, grab a beverage, and join me.</p>
      </div>
      <hr/>
      <div>
        <p className="call-out center">Educator by day, tinkerer by night, full day problem-solver.</p>
        <div className="dive-in">
          <p>Once a computer scientist, always a computer scientist.</p>
          <p>NYC-based with a passion for technologys and learning.</p>
          <p>Always looking forward to where life will lead me next.</p>
        </div>
      </div>
    </IndexStyles>
  )
}
