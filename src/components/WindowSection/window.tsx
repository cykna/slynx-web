import { useState, useEffect } from "react";
import { PaintbrushVertical, ChevronRight, ChevronLeft } from "lucide-react";
import "./Window.css";

interface WindowArgs {
  window_id: string;
  title: string;
  children: React.ReactNode;
  next: () => void;
  prev: () => void;
  onWidthChange: () => void;
}

export default function Window({
  window_id,
  title,
  children,
  next,
  prev,
  onWidthChange,
}: WindowArgs) {
  const [width, s_width] = useState<number>(100);

  const actions = {
    enlarge: () => s_width((prev) => (prev < 100 ? prev + 10 : prev)),
    reduce: () => s_width((prev) => (prev <= 10 ? 100 : prev - 10)),
    reset: () => s_width(100),
  };

  useEffect(() => {
    onWidthChange();
  }, [width, onWidthChange]);

  return (
    <div
      id={window_id}
      className="slynx-window"
      style={{ width: width + "%", flexShrink: 0 }}
    >
      <div className="window-title">
        <div className="window-control-btns">
          <div onClick={actions.enlarge}></div>
          <div onClick={actions.reset}></div>
          <div onClick={actions.reduce}></div>
        </div>

        <p className="title">{title}</p>

        <div className="window-theme-btns">
          <ChevronLeft className="prev" onClick={prev} />
          <PaintbrushVertical />
          <ChevronRight className="next" onClick={next} />
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}
