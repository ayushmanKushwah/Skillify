import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/courses.css'
import './css/about.css'
import './css/contact.css'
import './css/navbar.css'
import './css/preloader.css'
import './css/home.css'
import './css/animation.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
