import 'server-only'
import prisma from '@/lib/prisma'
import { requireUser } from '../user/require-user'

export async function getTodos() {
  const user = await requireUser()

  const todos = await prisma.todo.findMany({
    where: {
      userId: user.userId,
      completed: false
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return todos
}
