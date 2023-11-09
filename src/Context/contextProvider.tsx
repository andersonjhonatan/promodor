import { ReactNode, createContext, useState } from 'react'
import { CycleContextProps } from '../interfaces/InterCreateContext'
import { CycleFormData } from '../interfaces/InterNewCycleData'

export const ContextCyle = createContext({} as CycleContextProps)

export interface createNewCycle {
  nome: string
  minutes: number
}

export const CycleContextProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, setCycles] = useState<CycleFormData[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const createNewCycle = ({ nome, minutes }: createNewCycle) => {
    const id = String(new Date().getTime())

    const newCycle: CycleFormData = {
      id,
      nome,
      minutes,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

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
    <ContextCyle.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setAmountSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        handleInterruptCycle,
      }}
    >
      {children}
    </ContextCyle.Provider>
  )
}
