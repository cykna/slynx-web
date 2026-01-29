interface DivContentProps{
    text: string
}

export function DivContent({text}: DivContentProps){ 
    //DivContent creates the names for the content divisions and implements an indicator arrow.
return(
    <div>
    <h2>{text}</h2>
    {/*arrow-right*/}
    </div>
)
}