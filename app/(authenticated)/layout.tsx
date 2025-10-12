import { Header } from '@/components/layout/header'

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
