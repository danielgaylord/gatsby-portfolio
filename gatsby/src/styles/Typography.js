import { createGlobalStyle } from 'styled-components';
import "@fontsource/exo";

const Typography = createGlobalStyle`
    html {
        font-family: "Exo", -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 10px;
        color: var(--black);
    }
    p, li {
        letter-spacing: 0.5px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        margin: 0;
    }
    a {
        color: var(--metalblue);
        text-decoration-color: var(--babyblue);
        text-decoration-skip-ink: none;
    }
    .center {
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 8px;
        }
    }
    @media screen and (max-width: 600px) {
        html {
            font-size: 6px;
        }
    }
`;

export default Typography;