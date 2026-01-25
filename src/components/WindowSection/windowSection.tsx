import { useState, useRef, useEffect, useCallback } from "react";
import Window from "./window";
import { WINDOWS } from "./windows";

function calculateOffset(el: HTMLElement) {
  const width = parseInt(el.style.width) || 100;
  const centerOffset = (100 - width) / width;
  return el.offsetLeft - el.clientWidth * centerOffset * 0.5;
}

export default function WindowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getIndex = useCallback(
    (i: number) => (i + WINDOWS.length) % WINDOWS.length,
    [],
  );

  const updateLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      const activeChild = container.children[activeIndex] as HTMLElement;
      if (!activeChild) return;

      const offset = calculateOffset(activeChild);

      Array.from(container.children).forEach((child) => {
        (child as HTMLElement).style.transform = `translateX(${-offset}px)`;
      });
    });
  }, [activeIndex]);

  const move = useCallback(
    (step: number) => {
      setActiveIndex((prev) => getIndex(prev + step));
    },
    [getIndex],
  );

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  return (
    <div
      className="page-windows"
      ref={containerRef}
      style={{ display: "flex", alignItems: "center" }}
    >
      {WINDOWS.map((data, index) => (
        <Window
          key={data.id}
          window_id={`win-${data.id}-${index}`}
          data={data}
          next={() => move(1)}
          prev={() => move(-1)}
          onWidthChange={updateLayout}
        />
      ))}
    </div>
  );
}
