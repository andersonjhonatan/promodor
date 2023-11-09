import * as zod from 'zod'

const newMyTasksSchema = zod.object({
  nome: zod.string().min(1, { message: 'O nome deve ter pelo menos 1 letra' }),
  minutes: zod
    .number()
    .min(5, { message: 'O tempo deve ser pelo menos 1 minuto' })
    .max(60, { message: 'O tempo deve ser no máximo 60 minutos' }),
})

export { newMyTasksSchema }
