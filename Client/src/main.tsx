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
    <Card name="Md Omar Faruk Mozumder" Position="1" sup="st" color="text-red-600" id="20234103046" Section="02" img="https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAUlmDcn7Wsy1P2gR0rhkx7tphaK88wACbg4AAt7kcFTLoGAHqzZoTTQE" />
    <Card name="Apurba Kabiraj" Position="2" sup="nd" color="text-stone-700" id="20234103208" Section="06" img="https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAUlmDcn7Wsy1P2gR0rhkx7tphaK88wACbg4AAt7kcFTLoGAHqzZoTTQE" />
    <Card name="Md Imran Hossen" Position="3" sup="rd" color="text-orange-600" id="20234103258" Section="07" img="https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAUlmDcn7Wsy1P2gR0rhkx7tphaK88wACbg4AAt7kcFTLoGAHqzZoTTQE" />
  </React.StrictMode>,
)
