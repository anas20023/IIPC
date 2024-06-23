import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/navbar.tsx'
import Center from './Components/center.tsx'
import Winner from './Components/winners.tsx'
import Footer from './Components/footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Center />
    <Winner />
    <Footer />
  </React.StrictMode>,
)
