import { type Todo as TodoType } from "../types"
import { type TodoId } from "../types"

//type Props = TodoTYpe

interface Props extends TodoType {
    //estaba id:string se coloco id:TodoId
    onToogleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: (id: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToogleCompletedTodo }) => {

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToogleCompletedTodo({
            id,
            completed: event.target.checked
        })
    }

    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })
                }}
            />
        </div>
    )
}