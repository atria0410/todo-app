import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'prisma/config'

loadEnvConfig(process.cwd())

export default defineConfig({
  migrations: {
    seed: 'tsx ./prisma/seed.ts'
  }
})
