import styled from 'styled-components'
import { InterButtonProps } from '../../../interfaces/InterButton'

export const ButtonContainer = styled.button<InterButtonProps>`
  border: none;
  padding: 1rem;
  margin: 4px;
  width: 65%;
  border-radius: 8px;
  position: relative;
  font-weight: 700;
  color: ${(props) => {
    switch (props.variants) {
      case 'primary':
        return props.theme['cinza-100']
      case 'secondary':
        return 'white'
      case 'danger':
        return props.theme['cinza-100']
      case 'success':
        return props.theme['cinza-600']
      case 'back':
        return props.theme['cinza-600']
      default:
        break
    }
  }};

  width: ${(props) => {
    switch (props.variants) {
      case 'danger':
        return '150px'
      case 'back':
        return '150px'
      default:
        break
    }
  }};

  background-color: ${(props) => {
    switch (props.variants) {
      case 'primary':
        return props.theme['blue-200']
      case 'secondary':
        return props.theme['vermelho-100']
      case 'danger':
        return props.theme['vermelho-300']
      case 'success':
        return props.theme['blue-claro-300']
      case 'back':
        return props.theme['cinza-200']
      default:
        break
    }
  }};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    color: ${({ theme }) => theme['cinza-100']};
  }

  &:not(:disabled):hover {
    background-color: ${(props) => {
      switch (props.variants) {
        case 'primary':
          return props.theme['blue-300']
        case 'secondary':
          return props.theme['vermelho-300']
        case 'danger':
          return props.theme['vermelho-400']
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
