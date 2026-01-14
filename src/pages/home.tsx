import "./home.css";
import {useState, useRef} from "react";
import Dock from "../components/usabledock.tsx";
import Window from "../components/window.tsx";

const OFFSET_STEP = 12;

export default function Home() {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);
    const handleNext = (index: number) => {
    if (!ref.current || ref.current.children.length-1 === index) return;
    const newoffset = offset + ref.current.children[index].clientWidth + OFFSET_STEP; 
    setOffset(newoffset);
    for(const child of ref.current.children) child.style.transform = `translateX(-${newoffset}px)`;
  };
  const handlePrev = (index: number) => {
    if (!ref.current || index === 0) return;
    const newoffset = offset - (ref.current.children[index].clientWidth + OFFSET_STEP); 
    console.log(newoffset);
    setOffset(newoffset);
    for(const child of ref.current.children) child.style.transform = `translateX(-${newoffset}px)`;
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

