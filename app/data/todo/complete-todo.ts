'use server'

import { revalidatePath } from 'next/cache'
import { requireUser } from '@/app/data/user/require-user'
import prisma from '@/lib/prisma'
import { todoCompleteSchema } from '@/lib/schemas/todo-schema'

export async function completeTodo(id: number) {
  const user = await requireUser()

  const result = todoCompleteSchema.safeParse({ id })

  if (!result.success) {
    return { status: 'error', message: '入力内容に誤りがあります' }
  }

  await prisma.todo.update({
    where: {
      id: result.data.id,
      userId: user.userId
    },
    data: {
      completed: true
    }
  })

  return revalidatePath('/todos')
}
