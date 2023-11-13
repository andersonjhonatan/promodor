import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { CycleContextProps } from '../interfaces/InterCreateContext'
import { CycleFormData } from '../interfaces/InterNewCycleData'

import { cycleReducer } from '../reducers/cycles'
import {
  addNewCycleAction,
  interruptCycleAction,
  markCurrentCycleAsFinishedAction,
  deleteCyclesAllAction,
} from './actionType/CycleAction'
import { differenceInSeconds } from 'date-fns'

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
  const [cyclesState, dispatch] = useReducer(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const stateJSON = localStorage.getItem('@anderson-timer:cycles-state')
      if (stateJSON) {
        return JSON.parse(stateJSON)
      }

      return initialState
    },
  )
  const { activeCycleId, cycles } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@anderson-timer:cycles-state', stateJSON)
  }, [cyclesState])

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

  const deleterCycles = () => {
    dispatch(deleteCyclesAllAction())
    localStorage.removeItem('@anderson-timer:cycles-state')
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
        deleterCycles,
      }}
    >
      {children}
    </ContextCyle.Provider>
  )
}
