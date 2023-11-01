import { createGlobalStyle } from 'styled-components';

const toogle = true;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => toogle ? theme.dark : theme.light};
  color: ${({ theme }) => toogle ? theme.light : theme.dark};
}

a,
button {
  cursor: pointer;
  outline: none;
  text-decoration: none;
}
`;
