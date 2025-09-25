import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './sass/all.scss'
import App from './TeaHouse_app'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HashRouter>
    <App />

    </HashRouter> 
  // </StrictMode>, 
)
