import { type Todo as TodoType } from "../types"
import { type TodoId } from "../types"

//type Props = TodoTYpe

interface Props extends TodoType {
    //estab id:string
    onRemoveTodo: (id:TodoId) => void  
}

export const Todo:React.FC<Props> = ({id, title,completed, onRemoveTodo}) =>{
    return(
        <div className="view">
            <input
                className="toggle"      
                checked = {completed}      
                type="checkbox"
                onChange={()=>{}}
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>{
                    onRemoveTodo({id})
                }}
            />
        </div>
    )
}