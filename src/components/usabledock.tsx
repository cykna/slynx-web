import RawDock from "./dock.tsx";
import "./usabledock.css";
import Dock from "./dock.tsx";
import {Ellipsis,BookText,Github,Download,Hammer} from "lucide-react";

export default function UsableDock() {
  return <RawDock>
    <div className="icons">
      <button><Ellipsis/></button>
      <a href="/doc"><BookText/></a>      
      <a href="https://github.com/cykna/slynx"><Github/></a>
      <a href="/download"><Download/></a>
    </div>
  </RawDock>
}