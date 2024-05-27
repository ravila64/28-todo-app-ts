/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import { Todos } from "./components/Todos.tsx"
import { FilterValue, type TodoId, TodoTitle, Todo as TodoType } from "./types/Todo"
import { TODO_FILTERS } from "./constants.ts"
import { Footer } from "./components/Footer.tsx"
import { Header } from "./components/Header.tsx"

const mockTodos = [
  {
    id: '1', title: 'Ver el Twitch de midu', completed: false
  },
  {
    id: '2', title: 'Aprender React con TypesScript', completed: false
  },
  {
    id: '3', title: 'Sacar tickety de Midufest', completed: false
  },
  {
    id: '4', title: 'Other element for deleted', completed: false
  }
]

// usar el termino React.FC next 2 puntos, en vez de JSX.Element 
// Queda: const App:React.FC=()=> {}
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  // id:string, cambie, {id}=objeto nombrado, Lleva {}
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  // Se podria {}
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}:TodoTitle):void =>{
    const newTodo={
      title,
      id: crypto.randomUUID(),  // gener aid radom
      completed:false
    }
    // coloca qui los todos actuales + newTodo
    const newTodos= [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onToogleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}
export default App
