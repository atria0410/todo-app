import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'メールアドレスを入力してください' }),
  password: z.string().min(1, { message: 'パスワードを入力してください' })
})
