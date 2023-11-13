import { ActionTypes } from '../Context/actionType/CycleAction'
import { CycleFormData } from './InterNewCycleData'

export interface ActionProps {
  type: ActionTypes
  payload: {
    data: CycleFormData
  }
}
