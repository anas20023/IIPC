import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/navbar.tsx'
import Card from './Components/Card.tsx'
import Center from './Components/center.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Center />
    <Card />
  </React.StrictMode>,
)
