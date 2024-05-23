import { type Todo as TodoTYpe } from "../types"
type Props = TodoTYpe

export const Todo:React.FC<Props> = ({id, title,completed}) =>{
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
                onClick={()=>{}}
            />
        </div>
    )
}