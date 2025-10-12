import { z } from 'zod'

export const todoCreateSchema = z.object({
  title: z.string().min(1, { message: 'タイトルを入力してください' }),
  description: z.string().min(1, { message: '説明を入力してください' })
})

export const todoCompleteSchema = z.object({
  id: z.number().int().positive({ message: 'IDが指定されていません' })
})
