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
  background-color: ${({ theme }) =>
    toogle ? theme.dark : theme['cinza-100']};
}

a,
button {
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
