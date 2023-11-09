import styled from 'styled-components'
import { InterInput } from '../../interfaces/InterInput'

const InputForm = styled.input<InterInput>`
  padding: 0.5rem;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme['cinza-300']};

  background-color: transparent;
  color: ${(props) => props.theme['cinza-100']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::selection {
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme['blue-claro-500']};
  }

  width: ${(props) => {
    switch (props.variant) {
      case 'minutes':
        return '8%'
      default:
        break
    }
  }};
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
  height: 100%;
  justify-content: space-evenly;
  form {
    section {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['blue-200']};
      width: 20%;
      border-radius: 8px;
    }
  }
`

// countdown

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
export { CountdownDiv, FormContainer, InputForm }
