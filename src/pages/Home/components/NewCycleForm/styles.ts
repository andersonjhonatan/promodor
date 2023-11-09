import styled from 'styled-components'
import { InterInput } from '../../../../interfaces/InterInput'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
  height: 100%;
  justify-content: space-evenly;
  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['blue-200']};
    width: 20%;
    border-radius: 8px;
  }
`

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

const DivForm = styled.div`
  display: flex;
  gap: 1rem;
  width: 82%;
  justify-content: center;
  align-items: center;
`
export { InputForm, FormContainer, DivForm }
