import { InterButton } from '../interfaces/InterButton';
import { ButtonContainer } from './Button.styles';

const Button = ({ text, variant = 'primary', ...props }: InterButton) => {
  return (
    <ButtonContainer {...props} variants={variant} style={{ ...props.style }}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
