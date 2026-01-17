import './index.css';
import './App.css';
import UiBar, { type BarDirection } from "./components/uibar.tsx";
import { Moon } from "lucide-react";
import ThemeSwitcher from "./components/theme_switcher.tsx"
import Home from "./pages/home.tsx";
import Dock from "./components/usabledock.tsx";

export default function App() {
  return (<div className="ui">
    <UiBar direction={"right" as BarDirection} icons={
      <div className="bar-header">
        <ThemeSwitcher><Moon /></ThemeSwitcher>
        <p>Abacate</p>
        <p>Melancia</p>
      </div>
    }>
      <Home />
    </UiBar>
    <Dock />
  </div>)
}

