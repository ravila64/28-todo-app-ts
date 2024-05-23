import { type ListOfTodos } from "../types"
import { Todo } from "./Todo.tsx"

interface Props {
    todos: ListOfTodos
}
  
export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} 
                        className={`${todo.completed ? 'Completed':''}`}>
                        <Todo 
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}