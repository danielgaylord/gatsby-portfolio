import { createGlobalStyle } from 'styled-components';
import "@fontsource/nunito";

const Typography = createGlobalStyle`
    html {
        font-family: "Nunito", -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
`;

export default Typography;