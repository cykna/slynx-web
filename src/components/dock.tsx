import "./dock.css";
import { type ReactNode } from "react";
export default function Dock({ children }: { children: ReactNode }) {
  return <div className="dock">
    <div className="dock-icons">
      {children} 
    </div>
  </div>
}
