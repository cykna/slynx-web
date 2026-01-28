type SectionArg={
    child: React.ReactNode
}

export default function Sections(arg: SectionArg) {
    return(
              <section>
                    <p>Tooling</p>
                    {/*arrow-right*/}
                    <div>
                        <ul>
                            {arg.child}
                        </ul>
                    </div>
                </section>
    )
}