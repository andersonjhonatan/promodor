import { ButtonHTMLAttributes } from 'react'
import { ButtonVariant } from '../types/TButton'

export interface InterButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: ButtonVariant
}

export interface InterButtonProps {
  variants: ButtonVariant
}
