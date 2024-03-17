import { z } from 'zod'

export const taskFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(200, 'Description must be at less than 200 characters'),
  date: z.date(),
  isCompleted: z.boolean().default(false),
  isImportant: z.boolean().default(false),
})
