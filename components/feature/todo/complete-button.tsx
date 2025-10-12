'use client'

import { completeTodo } from '@/app/data/todo/complete-todo'
import { Button } from '@/components/ui/button'

export function CompleteButton({ id }: { id: number }) {
  return <Button onClick={() => completeTodo(id)}>完了</Button>
}
