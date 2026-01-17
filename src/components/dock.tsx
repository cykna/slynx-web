import "./dock.css";

export default function Dock({ children }: { children: React.ReactNode }) {
  return <div className="dock">
    <div className="dock-icons">
      {children}
    </div>
  </div>
}
