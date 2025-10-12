'use client'

import { useTransition } from 'react'
import { createTodos } from '@/app/data/todo/create-todos'
import { todoCreateSchema } from '@/lib/schemas/todo-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function TodoForm() {
  const [pending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof todoCreateSchema>>({
    resolver: zodResolver(todoCreateSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof todoCreateSchema>) => {
    startTransition(async () => {
      await createTodos(data)
      form.reset()
    })
  }

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Todoを追加</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>タイトル</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>説明</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={pending}>
              追加
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
