import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white bg-green-400 rounded-xl">
          Tailwind CSS is Working!
        </h1>
        <br/>
      </div>
      <Card username="Sayan" btnText="Click Me"/>
      <Card username="Raj" btnText="Visit Me"/>
    </>
    
  )
}

export default App
