import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    userId: number
    email: string
    name: string
  }

  interface Session extends DefaultSession {
    user: {
      userId: number
    } & DefaultSession['user']
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    userId: number
  }
}
