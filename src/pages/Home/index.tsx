/* eslint-disable prettier/prettier */
import { HomeContainer } from './HomeStyles'
import Button from '../../components/Button/Button'
import { FormContainer } from '../../components/Form/formStyles'
import { useForm, FormProvider } from 'react-hook-form'
import { NewCycleFormData } from '../../types/TNewFormData'
import NewClyceForm from './components/NewCycleForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { newMyTasksSchema } from '../../schema/FormShemaMain'
import CountDown from './components/CountDown'
import { useContext } from 'react'
import { ContextCyle } from '../../Context/contextProvider'

export const Home = () => {
  const { createNewCycle, activeCycle, handleInterruptCycle } = useContext(ContextCyle)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newMyTasksSchema),
    defaultValues: {
      minutes: 0,
      nome: '',
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('nome')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewClyceForm />
        </FormProvider>

        <CountDown />

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
