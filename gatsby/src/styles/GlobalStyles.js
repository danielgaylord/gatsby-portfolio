import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #2e2e2e;
        --white: #ffffff;
        --grey: #efefef;
        --brightgrey: #e7ecef;
        --slategrey: #8b8c89;
        --metalblue: #274c77;
        --lakeblue: #568AC8;
        --babyblue: #a3cef1;
        --curryorange: #775227;
        --camelbrown: #c89456;
        --tanpeach: #f1c5a2;
    }
    html, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 2rem;
    }

    /*
    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    }
    */

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--lakeblue) var(--brightgrey);
    }
    body::-webkit-scrollbar-track {
        background: var(--brightgrey);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--lakeblue);
        border-radius: 6px;
        border: 3px solid var(--brightgrey);
    }

    img {
        max-width: 100%;
    }
    a { 
        &:hover {
        color: var(--curryorange);
        text-decoration: var(---camelbrown);
        }
    }

    .flexbar {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 0rem;
    }
    .flexpart {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-self: center;
    }

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

    .jiggle:hover {
        animation: jiggle 0.5s infinite linear;
    }
    @keyframes jiggle {
        0% {transform: rotate(0deg);}
        25% {transform: rotate(4deg);}
        50% {transform: rotate(0deg);}
        75% {transform: rotate(-4deg);}
        100% {transform: rotate(0deg);}
    }
    @keyframes zoom-in {
        from {transform: scale(1); }
        to {transform: scale(1.1); }
    }
    @keyframes zoom-out {
        from {transform: scale(1.1); }
        to {transform: scale(1); }
    }
`;

export default GlobalStyles;