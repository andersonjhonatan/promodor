import { createNewCycle } from '../Context/contextProvider'
import { CycleFormData } from './InterNewCycleData'
import { Dispatch, SetStateAction } from 'react'

export interface CycleContextProps {
  activeCycle: CycleFormData | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setAmountSecondsPassed: Dispatch<SetStateAction<number>>
  createNewCycle: (data: createNewCycle) => void
  handleInterruptCycle: () => void
  cycles: CycleFormData[]
  filteredCycles: (name: string) => void
}
