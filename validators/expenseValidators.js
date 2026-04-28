import z from 'zod'


const expenseSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    amount: z.number().positive(),
    category: z.string().trim().min(1),
   date: z.string().datetime({ offset: true }).optional(),
  }),
});

export {expenseSchema}