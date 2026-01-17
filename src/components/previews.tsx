import { useEffect, useRef } from "react"
import "./previews.css";
export default function Previews() {
  const previews = useRef<HTMLElement>(null as any as HTMLElement);
  useEffect(() => {
    for (const child of previews.current.children) {
      const first_child = child.firstElementChild as HTMLElement;
      if (!first_child) continue;
      (child as HTMLElement).style.setProperty("--first-child-height", (first_child.offsetHeight * 2 || 100) + "px");
    }
  }, []);
  return <div className="previews" ref={previews as any}>
    <div>
      <h1>UI Oriented</h1>
      <p>
        Focused on making UI simple and readable, inspied by QML and Slint
      </p>
      <p>
        Styles and components as functions to make styling reusable
      </p>
      <p>
        A clear slot-based composition model defines how children are passed
        and reused, with no hidden behavior.
      </p>
    </div>

    <div>
      <h1>Data Driven</h1>
      <p>
        Built for data-driven applications where the UI naturally reflects
        application state.
      </p>
      <p>
        State changes flow through the system automatically, reducing glue
        code and manual synchronization.
      </p>
      <p>
        The model encourages predictable performance while staying simple
        and readable.
      </p>
    </div>

    <div>
      <h1>Compilers</h1>
      <p>
        The language frontend is provided as a library rather than a fixed toolchain.
      </p>
      <p>
        This enables custom compilers, tooling, and workflows without reimplementing
        the language.
      </p>
      <p>
        UI code generation is optimized to match handwritten implementations.
      </p>
    </div>
  </div>
}
