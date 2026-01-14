import "./home.css";
import { useState, useRef } from "react";
import Window from "../components/window.tsx";



function calculate_offset(next: HTMLElement) {
  const width = parseInt(next.style.width);
  const tocenter_offset = (100 - width) / width;
  return next.offsetLeft - (next.clientWidth * tocenter_offset * 0.5);
}


export default function Home() {
  const [offset, setOffset] = useState(0);
  const [active_window, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const handleNext = (index: number) => {

    if (!ref.current || ref.current.children.length - 1 === index || active_window !== index) return;
    setIndex(index + 1);

    const next = ref.current.children[index + 1] as HTMLElement;

    const newoffset = calculate_offset(next);

    setOffset(newoffset);

    for (const child of ref.current.children) (child as HTMLElement).style.transform = `translateX(-${newoffset}px)`;

  };

  const handlePrev = (index: number) => {
    if (!ref.current || index === 0 || active_window !== index) return;

    setIndex(index - 1);

    const next = ref.current.children[index - 1] as HTMLElement;

    const newoffset = calculate_offset(next);

    setOffset(newoffset);
    for (const child of ref.current.children) (child as HTMLElement).style.transform = `translateX(${-newoffset}px)`;

  };

  return (
    <div className="details">
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

