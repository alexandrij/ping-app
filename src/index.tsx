import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'
import './sw-register.ts'
import './assets/styles/reset.css';
import './assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
