import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const FourStyles = styled.div`
  img {
    float: none;
    margin: auto;
    width: 50%;
  }
`;

export default function FourOFourPage() {
  return (
    <FourStyles>
      <div className="page-top center">
        <p className="headline">Uh...this page doesn't exist (yet?)</p>
      </div>
      <div className="center">
        <StaticImage src="../assets/images/hugemanatee.jpg" alt="Oh the Huge Mantee!"/>
      </div>
    </FourStyles>
  )
}
