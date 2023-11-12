import { ACTION_TYPES } from '../types/TActionType'
import { CycleFormData } from './InterNewCycleData'

export interface ActionProps {
  type: ACTION_TYPES
  payload: {
    data: CycleFormData
  }
}
