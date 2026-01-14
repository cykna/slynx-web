import './index.css';
import './App.css';
import UiBar,{ BarDirection }from "./components/uibar.tsx";
import {Moon} from "lucide-react";
import ThemeSwitcher from "./components/theme_switcher.tsx"
import Home from "./pages/home.tsx";
import Dock from "./components/usabledock.tsx";

export default function App() {
  return (<div className="ui">
      <UiBar direction={BarDirection.Right} icons={
        <div className="bar-header">
          <ThemeSwitcher initiator_id="theme-switcher"><Moon/></ThemeSwitcher>
          <p>Abacate</p>
          <p>Melancia</p>
        </div>   
      }>
      <Home/>
      </UiBar>
    <Dock/>
  </div>)
}

