'use server'

import { revalidatePath } from 'next/cache'
import { requireUser } from '@/app/data/user/require-user'
import prisma from '@/lib/prisma'
import { todoCreateSchema } from '@/lib/schemas/todo-schema'
import { z } from 'zod'

export async function createTodos(data: z.infer<typeof todoCreateSchema>) {
  const user = await requireUser()

  const result = todoCreateSchema.safeParse(data)

  if (!result.success) {
    return { status: 'error', message: '入力内容に誤りがあります' }
  }

  await prisma.todo.create({
    data: {
      title: result.data.title,
      description: result.data.description,
      userId: user.userId
    }
  })

  return revalidatePath('/todos')
}
