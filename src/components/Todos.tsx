import { type Todo as TodoType, type TodoId,type ListOfTodos } from "../types/Todo"
import { Todo } from "./Todo.tsx"

// cambie id:string x id:TodoId
//onToggleCompletedTodo: ({id, completed}:TodoId) => void
interface Props {
    todos: ListOfTodos
    onToogleCompletedTodo : ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToogleCompletedTodo }) => {
    return (
            <ul className="todo-list">
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onToogleCompletedTodo={onToogleCompletedTodo} 
                            onRemoveTodo={onRemoveTodo}
                        />
                    </li>
                ))}
            </ul>
    )
}