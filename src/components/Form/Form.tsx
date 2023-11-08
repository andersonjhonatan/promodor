/* eslint-disable prettier/prettier */
import Button from '../Button/Button'
import { FormContainer, DivForm, CountdownDiv, InputForm } from './formStyles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newMyTasksSchema } from '../../schema/FormShemaMain'
import { NewCycleFormData } from '../../types/TNewFormData'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

interface CycleFormData {
  id: string
  nome: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

export default function Form() {
  const [cycles, setCycles] = useState<CycleFormData[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newMyTasksSchema),
    defaultValues: {
      minutes: 0,
      nome: '',
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0

  const submitForm: SubmitHandler<NewCycleFormData> = ({ minutes, nome }) => {
    const id = String(new Date().getTime())

    const newCycle: CycleFormData = {
      id,
      nome,
      minutes,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDf = differenceInSeconds(new Date(), activeCycle.startDate)

        if (secondsDf >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishDate: new Date() }
              } else {
                return cycle
              }
            })
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDf)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
      activeCycle && setCycles((state) => state.filter((cycle) => cycle.id !== activeCycleId))

    }
  }, [activeCycle, totalSeconds, activeCycleId])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Anderson Timer`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('nome')
  const isSubmitDisabled = !task

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitForm)}>
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
          label="Nome"
          placeholder="00"
          min={1}
          step={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutes', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </DivForm>

      <CountdownDiv>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <p>:</p>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownDiv>

      {activeCycle ? (
        <Button
          type="submit"
          variant="secondary"
          text="Interromper"
          disabled={activeCycle === null}
          onClick={handleInterruptCycle}
        />
      ) : (
        <Button
          type="submit"
          variant="primary"
          text="Começar"
          disabled={isSubmitDisabled}
        />
      )}
    </FormContainer>
  )
}
