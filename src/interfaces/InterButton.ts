import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant } from '../components/Button.styles';

export interface InterButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
}
