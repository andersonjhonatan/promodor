import { createGlobalStyle } from 'styled-components'

const toogle = true

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  color: ${({ theme }) => (toogle ? theme['cinza-100'] : theme.dark)};
}

:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-100']};
  padding: 8px;
  border-radius: 4px;
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
