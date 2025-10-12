import { Suspense } from 'react'
import { TodoForm } from '@/components/feature/todo/todo-form'
import { TodoList } from '@/components/feature/todo/todo-list'

export default async function TodoPage() {
  return (
    <div className="mx-auto max-w-2xl py-4">
      <h1 className="text-center text-2xl font-bold">Todo管理✅</h1>

      <div className="mt-4">
        <TodoForm />
      </div>

      <div className="mt-12">
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList />
        </Suspense>
      </div>
    </div>
  )
}
