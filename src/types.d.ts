export interface Todo {
    id: string
    title: string
    completed: boolean
}
// other option is Omit, se hace por si el id lo cambian a number y funcionaria
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]