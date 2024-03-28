import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('#root'))
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
