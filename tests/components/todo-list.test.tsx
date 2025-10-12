import { getTodos } from '@/app/data/todo/get-todos'
import type { Todo } from '@prisma/client'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TodoList } from '@/components/feature/todo/todo-list'

vi.mock('@/app/data/todo/get-todos', () => ({
  getTodos: vi.fn()
}))

vi.mock('@/app/data/user/require-user', () => ({
  requireUser: vi
    .fn()
    .mockResolvedValue({ userId: 1, email: 'test@example.com', name: '山田 太郎' })
}))

describe('TodoList', () => {
  it('TodoListがレンダリングされること', async () => {
    const dummyTodos: Todo[] = [
      {
        id: 1,
        title: 'Todo 1',
        description: 'Todo 1 description',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'Todo 2 description',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      }
    ]

    vi.mocked(getTodos).mockResolvedValue(dummyTodos)

    render(await TodoList())

    expect(screen.getByText('Todo 1')).toBeInTheDocument()
    expect(screen.getByText('Todo 2')).toBeInTheDocument()
  })
})
