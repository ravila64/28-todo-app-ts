import { useState } from "react"
import { type TodoTitle } from "../types/Todo"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue,setInputValue] = useState('')
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({title:inputValue})
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={() => { }}
                onKeyDown={() => { }}
                placeholder="Que quieres hacer?"
                autoFocus
            />
        </form>
    )
}