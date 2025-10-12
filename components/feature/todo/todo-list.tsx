import { getTodos } from '@/app/data/todo/get-todos'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CompleteButton } from './complete-button'

export async function TodoList() {
  const todos = await getTodos()

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <Card key={todo.id} className="shadow-none">
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
          </CardHeader>
          <CardContent>{todo.description}</CardContent>
          <CardFooter>
            <CompleteButton id={todo.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
