/* eslint-disable prettier/prettier */
import { CycleFormData } from '../../interfaces/InterNewCycleData'

export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export const addNewCycleAction = ({ newCycle }: { newCycle: CycleFormData }) => ({
  type: ActionTypes.CREATE_NEW_CYCLE,
  payload: {
    data: newCycle,
  },
})

export const interruptCycleAction = () => ({
  type: ActionTypes.INTERRUPT_CYCLE,
})

export const markCurrentCycleAsFinishedAction = () => ({
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
})
