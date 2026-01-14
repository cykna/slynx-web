import "./uibar.css";
export const enum BarDirection {
  Top="top", Left="left", Right="right", Bottom="bottom"
}
export default function UiBar({direction, children, icons}: {direction: BarDirection, children: React.ReactNode, icons: React.ReactNode}){
  return <div className={`uibar ${direction}`}>
    <div className={`inner ${direction}`}>
      {children}
    </div>
    {icons} 
  </div>
}