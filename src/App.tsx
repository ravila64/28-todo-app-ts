import { useState } from "react"
import { Todos } from "./components/Todos.tsx"

const mockTodos=[
  {
    id:'1',
    title:'Ver el Twitch de midu',
    completed: true
  },
  {
    id:'2',
    title:'Aprender React con TypesScript',
    completed: false
  },
  {
    id:'3',
    title:'Sacar tickety de Midufest',
    completed: false
  }
]

// usar el termino React.FC next 2 puntos, en vez de JSX.Element 
// Queda: const App:React.FC=()=> {}
const App = ():JSX.Element => {
  const [todos] = useState(mockTodos)
   
  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}
export default App
