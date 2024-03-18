import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body, input, textarea, button {
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3; 
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['base-text']};
  }

  body {
    background-color: ${(props) => props.theme.background};
  }

  .max-container {
    max-width: 70rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }


  /* TIPOGRAFIA */
  h1,h2,h3,h4,h5 { 
    font-family: 'Baloo 2', sans-serif; 
    color: ${(props) => props.theme['base-title']};
  }
  .font-800 {
    font-weight: 800;
  }
  .font-700 {
    font-weight: 700;
  }
  .title-xl {
    font-size: 3rem;
  }
  .title-l {
    font-size: 2rem;
  }
  .title-m {
    font-size: 1.5rem;
  }
  .title-m {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif; 
    font-weight: 800;
  }
  .title-s {
    font-size: 1.25rem;
  }
  .title-xs {
    font-size: 1.125rem;
  }
  .text-l {
    font-size: 1.25rem;
  }
  .text-m {
    font-size: 1rem;
  }
  .text-s {
    font-size: 0.875rem;
  }
  .text-xs {
    font-size: 0.75rem;
  }
  .tag {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  button {
    font-size: 0.75rem;
  }
  button.size-g {
    font-size: 0.875rem;
  }
`
