import { ActionTypes } from '../types/TActionType'
import { CycleFormData } from './InterNewCycleData'

export interface ActionProps {
  type: ActionTypes
  payload: {
    data: CycleFormData
  }
}
