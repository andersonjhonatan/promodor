import { z } from 'zod'

import { filterNameProjectSchema } from '../schema/FormShemaMain'

type TFilterName = z.infer<typeof filterNameProjectSchema>

export default TFilterName
