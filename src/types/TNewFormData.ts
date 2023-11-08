import { z } from 'zod'
import { newMyTasksSchema } from '../schema/FormShemaMain'

type NewCycleFormData = z.infer<typeof newMyTasksSchema>

export type { NewCycleFormData }
