import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  background-color: ${(props) => props.theme['cinza-700']};
  border-radius: 8px;
`
