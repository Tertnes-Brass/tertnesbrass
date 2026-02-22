import fs from 'node:fs'
import { useCallback, useState } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import './start.css'

const TODOS_FILE = 'todos.json'
let todosWriteQueue: Promise<void> = Promise.resolve()

interface Todo {
  id: number
  name: string
}

const fallbackTodos: Todo[] = [
  { id: 1, name: 'Handle dagligvarer' },
  { id: 2, name: 'Kjøp en ny telefon' },
]

async function readTodos(): Promise<Todo[]> {
  try {
    const rawTodos = await fs.promises.readFile(TODOS_FILE, 'utf-8').catch(() =>
      JSON.stringify(fallbackTodos, null, 2),
    )

    return JSON.parse(rawTodos) as Todo[]
  } catch {
    return fallbackTodos
  }
}

async function withTodosWriteLock<T>(operation: () => Promise<T>): Promise<T> {
  let releaseLock = () => {}
  const nextInQueue = new Promise<void>((resolve) => {
    releaseLock = resolve
  })

  const previousQueue = todosWriteQueue
  todosWriteQueue = previousQueue.catch(() => undefined).then(() => nextInQueue)
  await previousQueue.catch(() => undefined)

  try {
    return await operation()
  } finally {
    releaseLock()
  }
}

const getTodos = createServerFn({
  method: 'GET',
}).handler(async (): Promise<Todo[]> => await readTodos())

const addTodo = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => {
    if (typeof input !== 'string') {
      throw new Error('Oppgavenavn må være tekst')
    }

    const trimmed = input.trim()
    if (!trimmed) {
      throw new Error('Oppgavenavn kan ikke være tomt')
    }

    return trimmed
  })
  .handler(async ({ data }) => {
    return withTodosWriteLock(async () => {
      const todos = await readTodos()
      const nextId = Math.max(...todos.map((todo) => todo.id), 0) + 1
      todos.push({ id: nextId, name: data })
      await fs.promises.writeFile(TODOS_FILE, JSON.stringify(todos, null, 2))
      return todos
    })
  })

export const Route = createFileRoute('/demo/start/server-funksjoner')({
  component: Home,
  loader: async () => await getTodos(),
})

export function Home() {
  const router = useRouter()
  const todos = Route.useLoaderData() as Todo[]

  const [todo, setTodo] = useState('')

  const submitTodo = useCallback(async () => {
    const trimmedTodo = todo.trim()
    if (!trimmedTodo) {
      return
    }

    await addTodo({ data: trimmedTodo })
    setTodo('')
    await router.invalidate()
  }, [router, todo])

  return (
    <main aria-label="Start serverfunksjoner oppgaveliste">
      <h1>Start serverfunksjoner - oppgaveeksempel</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
      <div className="todo-form">
        <input
          type="text"
          aria-label="Ny oppgave"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              submitTodo()
            }
          }}
          placeholder="Skriv inn en ny oppgave..."
        />
        <button disabled={todo.trim().length === 0} onClick={submitTodo}>
          Legg til oppgave
        </button>
      </div>
    </main>
  )
}
