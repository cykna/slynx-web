
import type {ReactNode} from "react";

interface SectionProps{
    children: ReactNode
}

export function SectionStruct({children}:SectionProps){ //Create a <section> that encompasses the structure of the roadmap content.
    return (
        <section>
            {children}
        </section>
    )
}