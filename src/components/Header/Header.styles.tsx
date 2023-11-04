import styled from 'styled-components'

const NAV = styled.nav`
  background-color: ${(props) => props.theme['blue-200']};
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 30);
  justify-content: space-between;
  display: flex;
  padding: 2.5rem;
  h1 {
    color: ${(props) => props.theme['cinza-100']};
  }
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li > a {
    text-decoration: none;
    color: ${(props) => props.theme['cinza-100']};
  }
`

export { NAV, UL }
