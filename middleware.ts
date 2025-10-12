import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export default auth((req) => {
  const reqUrl = new URL(req.url)

  if (!req.auth && reqUrl?.pathname !== '/login') {
    // 未認証の場合はログインページにリダイレクト
    return NextResponse.redirect(new URL('/login', req.url))
  } else if (req.auth && reqUrl?.pathname === '/login') {
    // 認証済みの場合はトップページにリダイレクト
    return NextResponse.redirect(new URL('/todos', req.url))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
