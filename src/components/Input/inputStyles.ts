import styled from 'styled-components'
import { InterInput } from '../../interfaces/InterInput'

const InputForm = styled.input<InterInput>`
  padding: 0.5rem;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme['cinza-300']};

  width: ${(props) => {
    switch (props.variant) {
      case 'minutes':
        return '8%'
      default:
        break
    }
  }};

  background-color: transparent;
  color: ${(props) => props.theme['cinza-100']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::selection {
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme['blue-claro-500']};
  }
`
export { InputForm }
