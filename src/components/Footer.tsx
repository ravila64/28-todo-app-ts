import { FilterValue } from "../types/Todo"
import { Filters } from "./Filters"

interface Props{1
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue)=>void
}

export const Footer: React.FC<Props>=({
    activeCount =0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) =>{
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tereas pendientes
            </span>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
        </footer>
    )
} 