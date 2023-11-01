import styled from 'styled-components';
import { InterButtonProps } from '../../../interfaces/InterButton';

export const ButtonContainer = styled.button<InterButtonProps>`
  height: 40px;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  margin: 4px;

  background-color: ${(props) => props.theme['green-100']};
`;
