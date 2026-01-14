import "../styles/globals.css";
import "./window.css";
import {PaintbrushVertical,ChevronRight,ChevronLeft} from "lucide-react";

export default function Window({window_id, children, title}: {window_id: string, title:string, children: React.ReactNode}){ 
    return <div id={window_id} class="slynx-window">  
        <div class="window-title">
            <div class="window-control-btns">
                <div data-action="increase"></div>
                <div></div>
                <div data-action="decrease"></div>
            </div>
            <p class="title">{title}</p>
            <div class="window-theme-btns">
                <ChevronLeft class="prev" data-action="prev"/>
                <PaintbrushVertical/>
                <ChevronRight class="next" data-action="next"/>
            </div>
        </div>
        <div class="window-content">
            <slot/>
        </div>
    </div>
}