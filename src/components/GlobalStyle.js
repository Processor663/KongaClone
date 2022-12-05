import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        padding: 0px;
        margin:0px ;
        border-sizing: border-box;
    }

    body, html {
    font-family: Helvetica Neue,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    sans-serif;
  }
`;

export default GlobalStyle;
