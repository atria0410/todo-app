import { fakerJA as faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const COUNT = 5

export default async function seedUsers(prisma: PrismaClient) {
  const users = Array.from({ length: COUNT }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10)
  }))

  await prisma.user.createMany({
    data: users
  })
}
