import { completeTodo } from '@/app/data/todo/complete-todo'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CompleteButton } from '@/components/feature/todo/complete-button'

vi.mock('@/app/data/todo/complete-todo', () => ({
  completeTodo: vi.fn()
}))

describe('CompleteButton', () => {
  it('CompleteButtonがレンダリングされること', () => {
    render(<CompleteButton id={1} />)
    expect(screen.getByText('完了')).toBeInTheDocument()
  })

  it('ボタンクリックでcompleteTodoが発火すること', () => {
    render(<CompleteButton id={1} />)
    fireEvent.click(screen.getByText('完了'))
    expect(completeTodo).toHaveBeenCalledWith(1)
  })
})
