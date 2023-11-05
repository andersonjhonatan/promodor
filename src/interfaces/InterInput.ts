import { InputHTMLAttributes } from 'react'

export interface InterInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
}
