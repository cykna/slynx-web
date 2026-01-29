import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";

import './index.css'
import App from './App.tsx'
import Roadmap from './components/roadmap/roadmap.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/road" element={<Roadmap />} />
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
