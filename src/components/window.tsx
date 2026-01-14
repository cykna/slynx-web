import "../styles/globals.css";
import "./window.css";
import {PaintbrushVertical,ChevronRight,ChevronLeft} from "lucide-react";

export default function Window({window_id, children, title}: {window_id: string, title:string, children: React.ReactNode}){ 
    return <div id={window_id} className="slynx-window">  
        <div className="window-title">
            <div className="window-control-btns">
                <div data-action="increase"></div>
                <div></div>
                <div data-action="decrease"></div>
            </div>
            <p className="title">{title}</p>
            <div className="window-theme-btns">
                <ChevronLeft className="prev" data-action="prev"/>
                <PaintbrushVertical/>
                <ChevronRight className="next" data-action="next"/>
            </div>
        </div>
        <div className="window-content">
            <slot/>
        </div>
    </div>
}