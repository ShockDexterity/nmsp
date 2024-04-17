import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.querySelector('#root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
