import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlueArrow from './BlueArrow'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlueArrow />
  </StrictMode>,
)
