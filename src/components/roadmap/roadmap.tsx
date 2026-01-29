import "./roadmap.css";
import { DivContent } from "./divcontent";
import { ListStruct } from "./liststruct";
import { SectionStruct } from "./section";

export default function Roadmap() { //create roadmap struct page
    return (
        <div className="struc">
            <header>
                <h1></h1>
            </header>
            <main>

                <p>Legend</p>
                <SectionStruct>
                    <DivContent
                        text="Language Design"
                    />
                    <ListStruct>
                        <li>[~]Core vision and goals</li>
                        <li>[~]UI-oriented component model</li>
                        <li>[~]Function definitions (focusing on components)</li>
                        <li>[~]Numeric and string types</li>
                        <li>[ ]Boolean type</li>
                        <li>[~]Object model</li>
                        <li>[ ]Structs</li>
                        <li>[ ]Enums</li>
                        <li>[ ]Serialization/Deserialization</li>
                        <li>[ ]Control flow model (if/match/loops)</li>
                        <li>[ ]Error model</li>
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Front-end Implementation"
                    />
                    <ListStruct>
                        <li>[~]Lexer (identifiers, keywords, numbers, strings)</li>
                        <li>[~]Parser (expressions, functions, components, objects)</li>
                        <li>[~]Type system with Hindley-Milner</li>
                        <li>[ ]Generic parameters</li>
                        <li>[ ]Pattern matching</li>
                        <li>[ ]Error recovery</li>
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Back-end & IR"
                    />
                    <ListStruct>
                        <li>[ ]SSA-based IR design</li>
                        <li>[ ]Data-oriented layout (SoA by default)</li>
                        <li>[~]JavaScript backend</li>
                        <li>[ ]Runtime support (reactivity, events)</li>
                        <li>[ ]DOM/UI binding</li>
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Tooling"
                    />
                    <ListStruct>
                        <li>[~]CONTRIBUTING.md</li>
                        <li>[ ]Language reference documentation</li>
                        <li>[ ]IR specification</li>
                        <li>[ ]Example applications</li>
                    </ListStruct>
                </SectionStruct>

            </main>
        </div>
    )
}