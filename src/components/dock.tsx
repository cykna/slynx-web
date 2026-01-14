import type { ReactNode } from "react";
import "./dock.css";

export default function Dock({children}: {children: ReactNode}) {
  return <div className="dock">
    <div className="dock-icons">
      {children} 
    </div>
  </div>
}
