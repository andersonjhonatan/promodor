import { createGlobalStyle } from 'styled-components'

const toogle = true

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: ${({ theme }) => (toogle ? theme['cinza-100'] : theme.dark)};
  -webkit-font-smoothing: antialiased;
}

a,
button {
  cursor: pointer;
  outline: none;
  text-decoration: none;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
