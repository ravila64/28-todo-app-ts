import { type ListOfTodos } from "../types"
import { Todo } from "./Todo.tsx"
import { type TodoId } from "../types"

// cambie id:string x id:TodoId
interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id}
                        className={`${todo.completed ? 'Completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}