import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "Single Day", cursive;
    background-color: ${({ theme }) => theme.colors.gray_100};
  }

  #root {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
