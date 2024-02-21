import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.family.roboto};
    font-size: ${({ theme }) => theme.typography.size.md};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    box-sizing: border-box;
    outline: 2px solid transparent;
    -webkit-font-smoothing: antialiased;
  }

  *:focus {
    outline: 2px solid #996DFF;
  }

  body {
    color: ${({ theme }) => theme.color.basic.base.secondary};
    background-color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  a {
    text-decoration: none;
  }

  button,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  strong, strong * {
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`
