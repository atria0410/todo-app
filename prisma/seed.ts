import prisma from '@/lib/prisma'
import seedTodos from './seeds/todo'
import seedUsers from './seeds/user'

async function seeding() {
  await seedUsers(prisma)
  await seedTodos(prisma)
}

seeding()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
