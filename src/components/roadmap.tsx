import "./roadmap.css";


export default function Roadmap() {
    return (
        <div className="struc">
            <header>
                <h1></h1>
            </header>
            <main>
                <p>Legend</p>
                <section>
                    <p>Language Design</p>
                    {/*arrow-right*/}
                    <div>
                        <ul>
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
                        </ul>
                    </div>
                </section>
                <section>
                    <p>Front-end Implementation</p>
                    {/*arrow-right*/}
                    <div>
                        <ul>
                            <li>[~]Lexer (identifiers, keywords, numbers, strings)</li>
                            <li>[~]Parser (expressions, functions, components, objects)</li>
                            <li>[~]Type system with Hindley-Milner</li>
                            <li>[ ]Generic parameters</li>
                            <li>[ ]Pattern matching</li>
                            <li>[ ]Error recovery</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <p>Back-end & IR</p>
                    {/*arrow-right*/}
                    <div>
                        <ul>
                            <li>[ ]SSA-based IR design</li>
                            <li>[ ]Data-oriented layout (SoA by default)</li>
                            <li>[~]JavaScript backend</li>
                            <li>[ ]Runtime support (reactivity, events)</li>
                            <li>[ ]DOM/UI binding</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <p>Tooling</p>
                    {/*arrow-right*/}
                    <div>
                        <ul>
                            <li>[~]CONTRIBUTING.md</li>
                            <li>[ ]Language reference documentation</li>
                            <li>[ ]IR specification</li>
                            <li>[ ]Example applications</li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    )
}