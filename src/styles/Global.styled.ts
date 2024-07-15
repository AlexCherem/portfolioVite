import {createGlobalStyle} from "styled-components";
import {theme} from "src/styles/Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      background-color: #FFFFFF;  
  }
  section{
    padding: 100px 0;
    
    @media ${theme.media.mobile}{
      padding: 50px 0;
    }
  }
  
  h1,h2 {
    color: ${theme.colors.fontH1}
  }
  
  p,span {
    color: ${theme.colors.fontP}
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
`