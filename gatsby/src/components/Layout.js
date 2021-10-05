import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const FlexStyles = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ContentStyles = styled.div`
  flex: 1 0 auto;
  padding: 5rem 20rem;

  .page-top {
    width: 75%;
    margin: auto;
    margin-bottom: 5rem;
  }
  .headline {
    font-size: 36px;
  }
  .subtitle {
    font-size: 24px;
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
