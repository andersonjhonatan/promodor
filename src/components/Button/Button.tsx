import { InterButton } from '../../interfaces/InterButton'
import { ButtonContainer } from './stylesButton/Button.styles'
import { StyleSheetManager } from 'styled-components'

const Button = ({ text, variant = 'primary', ...props }: InterButton) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variants'}>
      <ButtonContainer {...props} variants={variant} style={{ ...props.style }}>
        {text}
      </ButtonContainer>
    </StyleSheetManager>
  )
}

export default Button
