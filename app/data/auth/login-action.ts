'use server'

import { signIn } from '@/auth'
import { loginSchema } from '@/lib/schemas/login-schema'
import { z } from 'zod'

export async function login(data: z.infer<typeof loginSchema>) {
  const result = loginSchema.safeParse(data)

  if (!result.success) {
    return { status: 'error', message: '入力内容に誤りがあります' }
  }

  const { email, password } = result.data

  try {
    await signIn('credentials', { email, password, redirect: false })
    return { status: 'success', message: 'ログインに成功しました' }
  } catch (error) {
    console.error(error)
    return { status: 'error', message: 'メールアドレスまたはパスワードが間違っています' }
  }
}
