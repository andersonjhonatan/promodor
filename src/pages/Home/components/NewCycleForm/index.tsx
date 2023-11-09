import { useFormContext } from 'react-hook-form'
import { InputForm, DivForm } from './styles'
import { useContext } from 'react'
import { ContextCyle } from '../../../../Context/contextProvider'

const NewClyceForm = () => {
  const { activeCycle } = useContext(ContextCyle)
  const { register } = useFormContext()

  return (
    <DivForm>
      <label htmlFor="nome">Vou trabalhar com</label>

      <InputForm
        variant="nome"
        id="nome"
        label="Nome"
        placeholder="Nome do seu Projeto"
        list="sugestions-task"
        disabled={!!activeCycle}
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
      <InputForm
        variant="minutes"
        id="minutes"
        type="number"
        label="minutes"
        placeholder="00"
        min={5}
        step={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutes', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </DivForm>
  )
}

export default NewClyceForm
