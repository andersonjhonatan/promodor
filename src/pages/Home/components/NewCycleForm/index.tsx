import { useFormContext } from 'react-hook-form'
import { InputForm, DivForm } from './styles'
import { useContext } from 'react'
import { ContextCyle } from '../../../../Context/contextProvider'

const NewClyceForm = () => {
  const { activeCycle } = useContext(ContextCyle)
  const { register } = useFormContext()
  const { cycles } = useContext(ContextCyle)

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
        {cycles.map((cycle) => {
          return <option key={cycle.id} value={cycle.nome} />
        })}
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
