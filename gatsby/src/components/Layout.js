import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const FlexStyles = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ContentStyles = styled.div`
  flex: 1 1 auto;
  padding: 5rem 20rem;

  .page-top {
    width: 75%;
    margin: auto;
    margin-bottom: 5rem;
  }
  .headline {
    font-size: 4rem;
  }
  .subtitle {
    font-size: 3rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 11rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <FlexStyles>
        <Nav />
        <ContentStyles>
          {children}
        </ContentStyles>
        <Footer />
      </FlexStyles>
    </>
  );
}
