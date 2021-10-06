import { createGlobalStyle } from 'styled-components';

const PageStyles = createGlobalStyle`
    html, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 2rem;
    }
`;

export default PageStyles;