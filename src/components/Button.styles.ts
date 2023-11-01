import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface InterButtonProps {
  variants: ButtonVariant;
}

const variants = {
  primary: 'blue',
  secondary: 'gray',
  danger: 'red',
  sucess: 'green',
};

export const ButtonContainer = styled.button<InterButtonProps>`
  height: 40px;

  ${(props) => `background-color: ${variants[props.variants]};`}
`;
