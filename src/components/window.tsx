import {useState} from "react";
import "../styles/globals.css";
import "./window.css";
import {PaintbrushVertical,ChevronRight,ChevronLeft} from "lucide-react";

interface WindowArgs {
  window_id: string;
  title: string;
  children: React.ReactNode;
  offset: number;
  next: ()=>void;
  prev: ()=>void;
}

export default function Window(args: WindowArgs){
  const [width, s_width] = useState(100);
  return <div id={args.window_id} className="slynx-window">
    <div className="window-title">
      <div className="window-control-btns">
        <div data-action="increase"></div>
        <div></div>
        <div data-action="decrease"></div>
      </div>
      <p className="title">{args.title}</p> 
      <div className="window-theme-btns">
          <ChevronLeft classNameName="prev" onClick={args.prev} client:load/>
          <PaintbrushVertical client:load/>
          <ChevronRight classNameName="next" onClick={args.next} client:load/>
      </div>
    </div>
    <div className="window-content">
      {args.children}
    </div>
  </div>
}