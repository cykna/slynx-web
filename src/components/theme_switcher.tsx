import "./theme_switcher.css";
import {useRef, ReactNode} from "react";

interface ThemeSwitcherArgs {
  children: ReactNode;
  initiator_id: string;
}

export default function ThemeSwitcher({children, initiator_id}: ThemeSwitcherArgs){
  const wrapper = useRef(null);
  async function handleClick(){
    const overlay = document.createElement("div");
    
    const rect = toggler.getBoundingClientRect();
    const x = rect.left + rect.width * 0.5;
    const y = rect.top + rect.height * 0.5;
    overlay.id = "overlay";
    overlay.style.setProperty("--cx", `${x}px`);
    overlay.style.setProperty("--cy", `${y}px`);

    document.body.appendChild(overlay);
    const duration = 3000;
    const applyTimeout = 900;
    await sleep(applyTimeout);
    applyTheme(wrapper.current);
    await sleep(duration - applyTimeout);
    overlay.remove();
  }
  return <div className="anim-wrapper" id={initiator_id} ref={wrapper} onClick={handleClick}>
    {children}
  </div>
}

function sleep(amount){
  return new Promise(ok => setTimeout(ok, amount));
}


