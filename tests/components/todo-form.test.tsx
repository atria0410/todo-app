import { createTodos } from '@/app/data/todo/create-todos'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TodoForm } from '@/components/feature/todo/todo-form'

vi.mock('@/app/data/todo/create-todos', () => ({
  createTodos: vi.fn()
}))

describe('TodoForm', () => {
  it('TodoFormがレンダリングされること', () => {
    render(<TodoForm />)
    expect(screen.getByText('Todoを追加')).toBeInTheDocument()
    expect(screen.getByLabelText('タイトル')).toBeInTheDocument()
    expect(screen.getByLabelText('説明')).toBeInTheDocument()
    expect(screen.getByText('追加')).toBeInTheDocument()
  })

  it('タイトルと説明が空の場合はバリデーションエラーが表示されること', async () => {
    render(<TodoForm />)

    fireEvent.click(screen.getByText('追加'))

    await waitFor(() => {
      expect(screen.getAllByText(/必須|入力してください|必ず/).length).toBeGreaterThan(0)
    })
  })

  it('タイトルと説明が入力されている場合は正常に送信できること', async () => {
    render(<TodoForm />)

    fireEvent.change(screen.getByLabelText('タイトル'), {
      target: { value: '買い物' }
    })
    fireEvent.change(screen.getByLabelText('説明'), {
      target: { value: '牛乳を買う' }
    })

    fireEvent.click(screen.getByText('追加'))

    await waitFor(() => {
      expect(createTodos).toHaveBeenCalledWith({
        title: '買い物',
        description: '牛乳を買う'
      })
    })
  })

  it('送信後にフォームがリセットされること', async () => {
    render(<TodoForm />)

    fireEvent.change(screen.getByLabelText('タイトル'), {
      target: { value: '掃除' }
    })
    fireEvent.change(screen.getByLabelText('説明'), {
      target: { value: '部屋を片付ける' }
    })

    fireEvent.click(screen.getByText('追加'))

    await waitFor(() => {
      expect(createTodos).toHaveBeenCalled()
    })

    expect(screen.getByLabelText('タイトル')).toHaveValue('')
    expect(screen.getByLabelText('説明')).toHaveValue('')
  })
})
