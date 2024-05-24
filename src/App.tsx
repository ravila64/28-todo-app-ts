import { useState } from "react"
import { Todos } from "./components/Todos.tsx"
import { type TodoId, Todo as TodoType } from "./types"

const mockTodos = [
  {
    id: '1',
    title: 'Ver el Twitch de midu',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con TypesScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar tickety de Midufest',
    completed: false
  },
  {
    id: '4',
    title: 'Other element for deleted',
    completed: false
  }
]

// usar el termino React.FC next 2 puntos, en vez de JSX.Element 
// Queda: const App:React.FC=()=> {}
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  // id:string, cambie, {id}=objeto nombrado
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  // Se prodria {}
  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {

  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>
  )
}
export default App
