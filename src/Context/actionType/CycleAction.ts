/* eslint-disable prettier/prettier */
import { CycleFormData } from '../../interfaces/InterNewCycleData'
import { ActionTypes } from '../../types/TActionType'

export const addNewCycleAction = ({ newCycle }: { newCycle: CycleFormData }) => ({
  type: ActionTypes.CREATE_NEW_CYCLE,
  payload: {
    data: newCycle,
  },
})

export const interruptCycleAction = () => ({
  type: ActionTypes.INTERRUPT_CYCLE,
  payload: {
    data: {
      id: '',
      nome: '',
      minutes: 0,
      startDate: new Date(),
    },
  },
})

export const markCurrentCycleAsFinishedAction = () => ({
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  payload: {
    data: {
      id: '',
      nome: '',
      minutes: 0,
      startDate: new Date(),
    },
  },
})

export const filterNameProjectAction = (name: string) => ({
  type: ActionTypes.FILTER_NAME_PROJECT,
  payload: {
    data: name,
  },
})

export const deleteCyclesAllAction = () => ({
  type: ActionTypes.DELETE_CYCLES,
  payload: {
    data: {
      id: '',
      nome: '',
      minutes: 0,
      startDate: new Date(),
    },
  },
})
