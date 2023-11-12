import { ReactNode, createContext, useState, useReducer } from 'react'
import { CycleContextProps } from '../interfaces/InterCreateContext'
import { CycleFormData } from '../interfaces/InterNewCycleData'

import { cycleReducer } from '../reducers/cycles'
import {
  addNewCycleAction,
  interruptCycleAction,
  markCurrentCycleAsFinishedAction,
} from './actionType/CycleAction'

export const ContextCyle = createContext({} as CycleContextProps)

export interface createNewCycle {
  nome: string
  minutes: number
}

export interface CyclesState {
  cycles: CycleFormData[]
  activeCycleId: string | null
}

export const CycleContextProvider = ({ children }: { children: ReactNode }) => {
  const [cyclesState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { activeCycleId, cycles } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const createNewCycle = ({ nome, minutes }: createNewCycle) => {
    const id = String(new Date().getTime())

    const newCycle: CycleFormData = {
      id,
      nome,
      minutes,
      startDate: new Date(),
    }
    dispatch(addNewCycleAction({ newCycle }))
    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    dispatch(interruptCycleAction())
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
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
        cycles,
      }}
    >
      {children}
    </ContextCyle.Provider>
  )
}
