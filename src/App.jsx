import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import LightBox from './Components/LightBox'
import Description from './Components/Description'

function App() {


  return (
    <div className='h-screen'>
      <NavBar />

      <div className='flex flex-col xl:flex-row items-center'>
        <LightBox />
        <Description />
      </div>

    </div>
  )
}

export default App
