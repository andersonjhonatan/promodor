import Button from '../Button/Button'
import Input from '../Input/Input'
import { FormContainer, DivForm, CountdownDiv } from './formStyles'
import { useForm, SubmitHandler } from 'react-hook-form'

interface InterForm {
  nome: string
  minutes: number
}

export default function Form() {
  const { register, handleSubmit, watch } = useForm<InterForm>()

  const submitForm: SubmitHandler<InterForm> = (data) => {
    console.log(data)
  }

  const task = watch('nome')
  const isSubmitDisabled = !task

  return (
    <FormContainer onSubmit={handleSubmit(submitForm)}>
      <DivForm>
        <label htmlFor="nome">Vou trabalhar com</label>
        <Input
          variant="nome"
          id="nome"
          label="Nome"
          placeholder="Nome do seu Projeto"
          list="sugestions-task"
          {...register('nome')}
        />

        <datalist id="sugestions-task">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
          <option value="Projeto 5" />
        </datalist>

        <label htmlFor="minutes">durante</label>
        <Input
          variant="minutes"
          id="minutes"
          type="number"
          label="Nome"
          placeholder="00"
          min={0}
          max={60}
          step={5}
          {...register('minutes', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </DivForm>

      <CountdownDiv>
        <span>0</span>
        <span>0</span>
        <p>:</p>
        <span>0</span>
        <span>0</span>
      </CountdownDiv>

      <Button
        type="submit"
        variant="primary"
        text="Começar"
        disabled={isSubmitDisabled}
      />
    </FormContainer>
  )
}
