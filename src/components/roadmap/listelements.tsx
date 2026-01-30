type ListElementsArguments={ //Defines the required data structure: an object with an array of strings.
    content: Array<string> 

}

export function ListElements(args: ListElementsArguments) { //A dynamic component that renders <li> items by mapping through the provided content array.
    
        return (
            <>
            {args.content.map((value, index)=>(
                <li key={index}>{value}</li>
            ))}
            </>
        )
        
}