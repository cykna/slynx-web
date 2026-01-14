import {useState} from "react";
import "../index.css";
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
          <ChevronLeft className="prev" onClick={args.prev}/>
          <PaintbrushVertical/>
          <ChevronRight className="next" onClick={args.next}/>
      </div>
    </div>
    <div className="window-content">
      {args.children}
    </div>
  </div>
}