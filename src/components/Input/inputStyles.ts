import styled from 'styled-components'
import { InterInput } from '../../interfaces/InterInput'

const InputForm = styled.input<InterInput>`
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  outline: none;

  width: ${(props) => {
    switch (props.variant) {
      case 'minutes':
        return '8%'
      default:
        break
    }
  }};

  background-color: ${(props) => props.theme['cinza-100']};
  color: ${(props) => props.theme['cinza-600']};

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue-100']};
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export { InputForm }
