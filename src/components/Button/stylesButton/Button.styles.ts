import styled from 'styled-components'
import { InterButtonProps } from '../../../interfaces/InterButton'

export const ButtonContainer = styled.button<InterButtonProps>`
  border: none;
  padding: 1rem;
  margin: 4px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  font-weight: 700;

  background-color: ${(props) => {
    switch (props.variants) {
      case 'primary':
        return props.theme['blue-200']
      case 'secondary':
        return props.theme['cinza-100']
      case 'danger':
        return props.theme['vermelho-500']
      case 'success':
        return props.theme['blue-claro-300']
      case 'back':
        return props.theme['cinza-200']
      default:
        break
    }
  }};

  width: ${(props) => {
    return props.variants === 'primary' && '30%'
  }};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => {
      switch (props.variants) {
        case 'primary':
          return props.theme['blue-300']
        case 'secondary':
          return props.theme['cinza-100']
        case 'danger':
          return props.theme['vermelho-500']
        case 'success':
          return props.theme['green-500']
        case 'back':
          return props.theme['cinza-200']
        default:
          break
      }
    }};

    transition: 0.3s;
  }
`
