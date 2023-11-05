import styled from 'styled-components'
import { InterButtonProps } from '../../../interfaces/InterButton'

export const ButtonContainer = styled.button<InterButtonProps>`
  border: none;
  padding: 1rem;
  margin: 4px;
  width: 100%;

  background-color: ${(props) => {
    switch (props.variants) {
      case 'primary':
        return props.theme['blue-200']
      case 'secondary':
        return props.theme['cinza-100']
      case 'danger':
        return props.theme['vermelho-500']
      case 'success':
        return props.theme['green-500']
      case 'back':
        return props.theme['cinza-200']
      default:
        return props.theme['blue-500']
        break
    }
  }};

  width: ${(props) => {
    return props.variants === 'primary' && '30%'
  }};
`
