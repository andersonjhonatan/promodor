import { InputHTMLAttributes } from 'react'
import { InputVariant } from '../types/TInput'

export interface InterInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
  variant: InputVariant
}
