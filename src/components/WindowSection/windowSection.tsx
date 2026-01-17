import { useState, useRef, useEffect, useCallback } from "react";
import Window from "./window";

function calculate_offset(next: HTMLElement) {
  const width = parseInt(next.style.width) || 100;
  const tocenter_offset = (100 - width) / width;
  return next.offsetLeft - next.clientWidth * tocenter_offset * 0.5;
}

export default function WindowSection() {
  const [windowNames] = useState(["Seila", "Maria", "Se vira"]);
  const [activeIndex, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getIndex = (i: number) => (i + windowNames.length) % windowNames.length;

  const updateLayout = useCallback(() => {
    requestAnimationFrame(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const activeChild = container.children[activeIndex] as HTMLElement;

      if (!activeChild) return;

      const newOffset = calculate_offset(activeChild);

      for (const child of container.children) {
        (child as HTMLElement).style.transform = `translateX(${-newOffset}px)`;
      }
    });
  }, [activeIndex]);

  const handleMove = (step: number) => {
    setIndex((prev) => getIndex(prev + step));
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  return (
    <div
      id="page-wins"
      className="page-windows"
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {windowNames.map((name, index) => (
        <Window
          key={name}
          window_id={`win-${name}-${index}`}
          title={name}
          next={() => handleMove(1)}
          prev={() => handleMove(-1)}
          onWidthChange={updateLayout}
        >
          Gay
        </Window>
      ))}
    </div>
  );
}
