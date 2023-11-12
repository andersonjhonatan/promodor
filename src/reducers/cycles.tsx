import { CyclesState } from '../Context/contextProvider'
import { ActionTypes } from '../Context/actionType/CycleAction'
import { produce } from 'immer'
/* import { CycleFormData } from '../interfaces/InterNewCycleData'
 */
function cycleReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      return produce(state, (draft) => {
        // draft é o estado atual
        draft.cycles.push(action.payload.data)
        draft.activeCycleId = action.payload.data.id
      })

    case ActionTypes.INTERRUPT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishDate = new Date()
      })
    }
    default:
      return state
  }
}

export { cycleReducer }
