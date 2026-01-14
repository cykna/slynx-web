import "./uibar.css";
export const enum BarDirection {
  Top="top", Left="left", Right="right", Bottom="bottom"
}
export default function UiBar({direction, children, icons}: {direction: BarDirection, children: React.ReactNode, icons: React.ReactNode}){
  return <div class={`uibar ${direction}`}>
    <div class={`inner ${direction}`}>
      {children}
    </div>
    {icons} 
  </div>
}