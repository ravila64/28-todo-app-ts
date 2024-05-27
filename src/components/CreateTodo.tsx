/* eslint-disable react/react-in-jsx-scope */
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
            <input className="new-todo"
                value={inputValue}
                onChange={(event) => { 
                    setInputValue(event.target.value)
                }}
                // onKeyDown={() => { }}
                placeholder="¿Que quieres hacer?"
                autoFocus
            />
        </form>
    )
}


//example de un polyfill, para que funcione en navegadores
// que no tienen la funcion randomUUID
window.crypto.randomUUID = window.crypto.randomUUID || function() {
    const crypto = window.crypto || window.msCrypto
    const rnds8 = new Uint8Array(16)
    return crypto.getRandomValues(rnds8).reduce(function(result, value){
        return result + CSSMathValue.toString().padStart(2,'0')
    }, '')
}

