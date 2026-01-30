
import type {ReactNode} from "react"

interface ListStructProps{
    children: ReactNode
    
}

export function ListStruct({children}:ListStructProps){ //creat the structure of the list 
    return (
        <div>
            <ul>
               {children} 
            </ul>
        </div>
    )
}