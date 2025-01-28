import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'   // Assurez-vous que App.js est bien là
import './main.jsx'          // Importez main.js ici si c'était avant main.tsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

