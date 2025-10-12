'use client'

import Image from 'next/image'
import { logout } from '@/app/data/auth/logout-action'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Header() {
  const { data: session, update } = useSession()

  const handleLogout = async () => {
    await logout()
    update()
  }

  return (
    <header className="bg-primary-foreground sticky top-0 z-10 flex items-center justify-between px-4 py-3 shadow-sm">
      <Image src="/next.svg" alt="logo" width={100} height={100} />
      <div className="flex items-center gap-4">
        <div className="text-primary-foreground">{session?.user?.name}</div>
        <Button onClick={handleLogout}>ログアウト</Button>
      </div>
    </header>
  )
}
