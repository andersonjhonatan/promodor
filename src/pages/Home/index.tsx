import { HomeContainer } from './HomeStyles'
import Button from '../../components/Button/Button'
import { FormContainer } from '../../components/Form/formStyles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NewCycleFormData } from '../../types/TNewFormData'
import { useState, createContext } from 'react'
import NewClyceForm from './components/NewCycleForm'
import { CycleFormData } from '../../interfaces/InterNewCycleData'
import { zodResolver } from '@hookform/resolvers/zod'
import { newMyTasksSchema } from '../../schema/FormShemaMain'
import CountDown from './components/CountDown'
import { CycleContextProps } from '../../interfaces/InterCreateContext'

export const CycleContext = createContext({} as CycleContextProps)

export const Home = () => {
  const [cycles, setCycles] = useState<CycleFormData[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newMyTasksSchema),
    defaultValues: {
      minutes: 0,
      nome: '',
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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
      }),
    )
    setActiveCycleId(null)
  }
  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            register,
            setCycles,
          }}
        >
          <NewClyceForm />
          <CountDown />
        </CycleContext.Provider>

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
    </HomeContainer>
  )
}
