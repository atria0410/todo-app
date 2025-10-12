import { fakerJA as faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const COUNT = 20

export default async function seedTodos(prisma: PrismaClient) {
  const users = await prisma.user.findMany()

  const todos = Array.from({ length: COUNT }).map(() => ({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    completed: faker.datatype.boolean(),
    userId: faker.helpers.arrayElement(users).id
  }))

  await prisma.todo.createMany({
    data: todos
  })
}
