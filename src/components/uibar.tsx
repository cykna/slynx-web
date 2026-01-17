import "./uibar.css";
export type BarDirection = "top" | "left" | "right" | "bottom";

export default function UiBar({ direction, children, icons }: { direction: BarDirection, children: React.ReactNode, icons: React.ReactNode }) {
  return <div className={`uibar ${direction}`}>
    <div className={`inner ${direction}`}>
      {children}
    </div>
    {icons}
  </div>
}
