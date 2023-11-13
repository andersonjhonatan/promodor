import styled from 'styled-components'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  p {
    padding-top: 3rem;
  }
`

const CountdownDiv = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  p {
    font-size: 6rem;
  }

  span {
    border: 1px solid #fff;
    padding: 2rem 2rem;
    font-size: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-family: 'Roboto Mono', monospace;
  }
`

export { CountdownDiv, ContainerDiv }
