import { ForwardedRef, forwardRef } from 'react'
import { InterInput } from '../../interfaces/InterInput'
import { InputForm } from './inputStyles'

const Input = forwardRef(
  (props: InterInput, ref: ForwardedRef<HTMLInputElement>) => (
    <InputForm {...props} ref={ref} />
  ),
)

Input.displayName = 'Input'

export default Input
