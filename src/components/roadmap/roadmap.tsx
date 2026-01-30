import "./roadmap.css";
import { DivContent } from "./divcontent";
import { ListStruct } from "./liststruct";
import { SectionStruct } from "./section";
import { ListElements} from "./listelements";

export default function Roadmap() { //create roadmap struct page
    
    return (
        <div className="struc">
            <header>
                <h1>Slynx Roadmap</h1>
                <p>The Slynx Language Roadmap for guiding and tracking language development.</p>
            </header>
            <p>Legend</p>
            <main>
                <SectionStruct>
                    <DivContent
                        text="Language Design"
                    />
                    <ListStruct>
                    <ListElements content={["[~]Core vision and goals", "[~]UI-oriented component model", "[~]Function definitions (focusing on components)",
        "[~]Numeric and string types","[ ]Boolean type","[~]Object model","[ ]Structs","[ ]Enums","[ ]Serialization/Deserialization",
        "[ ]Control flow model (if/match/loops)", "[ ]Error model"]}/>
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Front-end Implementation"
                    />
                    <ListStruct>
                        <ListElements content={["[~]Lexer (identifiers, keywords, numbers, strings)","[~]Parser (expressions, functions, components, objects)",
                        "[~]Type system with Hindley-Milner","[ ]Generic parameters","[ ]Pattern matching","[ ]Error recovery"]} />
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Back-end & IR"
                    />
                    <ListStruct>
                        <ListElements content={["[ ]SSA-based IR design", "[ ]Data-oriented layout (SoA by default)","[~]JavaScript backend", 
                        "[] ]Runtime support (reactivity, events)", "[ ]DOM/UI binding"]} />
                    </ListStruct>
                </SectionStruct>
                <SectionStruct>
                    <DivContent
                        text="Tooling"
                    />
                    <ListStruct>
                        <ListElements content={["[~]CONTRIBUTING.md","[ ]Language reference documentation","[ ]IR specification","[ ]Example applications"]} />
                    </ListStruct>
                </SectionStruct>

            </main>
        </div>
    )
}