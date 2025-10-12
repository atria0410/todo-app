import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const { email, password } = credentials

        const user = await prisma.user.findUnique({
          where: {
            email: email as string
          }
        })

        if (!user) {
          throw new Error('ユーザーが見つかりません')
        }

        const passwordsMatch = await bcrypt.compare(password as string, user.password)

        if (!passwordsMatch) {
          throw new Error('パスワードが一致しません')
        }

        return {
          userId: user.id,
          email: user.email,
          name: user.name
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId
      }
      return token
    },
    async session({ session, token }) {
      session.user.userId = token.userId
      return session
    }
  }
})
