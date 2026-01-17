import RawDock from "./dock.tsx";
import "./usabledock.css";
import { Ellipsis, BookText, GitPullRequest, Download } from "lucide-react";

export default function UsableDock() {
  return <RawDock>
    <div className="icons">
      <button><Ellipsis /></button>
      <a href="/doc"><BookText /></a>
      <a href="https://github.com/cykna/slynx"><GitPullRequest /></a>
      <a href="/download"><Download /></a>
    </div>
  </RawDock>
}
