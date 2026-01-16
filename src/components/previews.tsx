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
  return <div className="previews" ref={previews}>
    <div>
      <h1>Docs</h1>
      <p>Check the documentation of the language</p>
    </div>
    <div>
      <h1>Contributing</h1>
      <p>Feel free to join the discord server and contribute with the language</p>
    </div>
    <div>
      <h1>Communities</h1>
      <p>If interested on</p>
    </div>
  </div>
}
