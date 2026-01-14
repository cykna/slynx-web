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
  return <div id={args.window_id} className="slynx-window" style={{width:width+"%"}}>
    <div className="window-title">
      <div className="window-control-btns">
        <div onClick={()=>{s_width(width+10)}}></div>
        <div></div>
        <div onClick={()=>{if(width <= 10) s_width(100); else s_width(width-10)}}></div>
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