import "./home.css";
import {useState, useRef} from "react";
import Dock from "../components/usabledock.tsx";
import Window from "../components/window.tsx";

const OFFSET_STEP = 12;

export default function Home() {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const handleNext = (index: number) => {
    console.log("meudeus");
      if (!ref.current) return;
  
      const current =
        ref.current.children[index] as HTMLElement;
  
      setOffset(o =>
        o + current.clientWidth + OFFSET_STEP
      );
    };
  
    const handlePrev = (index: number) => {
      if (!ref.current) return;
  
      const current =
        ref.current.children[index] as HTMLElement;
  
      setOffset(o =>
        Math.max(0, o - (current.clientWidth + OFFSET_STEP))
      );
    };
  
  return (
    <div className="details">
      <button onClick={e=>{
        alert("eu naoguento mais");
      }}>Funciona pelo amor de deus</button>
      <div id="page-wins" className="page-windows" ref={ref}>
        {[0, 1, 2].map(i => (
          <Window
            key={i}
            title="Seila"
            index={i}
            offset={offset}
            next={() => handleNext(i)}
            prev={() => handlePrev(i)}
          />
        ))}
      </div>
    </div>
  );
}

