import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Snowfall from "./components/themes/snowfall";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Snowfall />
    <App />
  </StrictMode>,
)
