import "./theme_switcher.css";
import { useRef } from "react";

interface ThemeSwitcherArgs {
  children: React.ReactNode;
  initiator_id: string;
}

function applyTheme(target: HTMLElement) {
  const current_theme = target.getAttribute("data-theme") ?? localStorage.getItem("theme");
  const current = current_theme == void (0) ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : current_theme;

  const next = current === "dark" ? "light" : "dark";
  target.setAttribute('data-theme', next);
  localStorage.setItem("theme", next);
}

export default function ThemeSwitcher({ children }: ThemeSwitcherArgs) {
  const wrapper = useRef<HTMLElement>(null);
  async function handleClick() {
    const overlay = document.createElement("div");

    const rect = wrapper.current!.getBoundingClientRect();
    const x = rect.left + rect.width * 0.5;
    const y = rect.top + rect.height * 0.5;
    overlay.id = "overlay";
    overlay.style.setProperty("--cx", `${x}px`);
    overlay.style.setProperty("--cy", `${y}px`);

    document.body.appendChild(overlay);
    const duration = 3000;
    const applyTimeout = 900;
    await sleep(applyTimeout);
    applyTheme(document.firstElementChild as HTMLElement);
    await sleep(duration - applyTimeout);
    overlay.remove();
  }
  return <div className="anim-wrapper" ref={wrapper} onClick={handleClick}>
    {children}
  </div>
}

function sleep(amount: number) {
  return new Promise(ok => setTimeout(ok, amount));
}


