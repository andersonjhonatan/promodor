import { UseFormRegister } from 'react-hook-form'
import { CycleFormData } from './InterNewCycleData'
import { Dispatch, SetStateAction } from 'react'

export interface CycleContextProps {
  activeCycle: CycleFormData | undefined
  activeCycleId: string | null
  register: UseFormRegister<{
    nome: string
    minutes: number
  }>
  setCycles: Dispatch<SetStateAction<CycleFormData[]>>
  amountSecondsPassed: number
  setAmountSecondsPassed: Dispatch<SetStateAction<number>>
}
