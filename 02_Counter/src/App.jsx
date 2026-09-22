import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)
  //let counter=0;

  const addValue = ()=>{
    counter+=1;
    if(counter>20) counter=20;
    setCounter(counter)
    console.log(counter);
  }

  const removeValue = ()=>{
    counter-=1;
    if(counter<0) counter=0; 
    setCounter(counter)
    console.log(counter);
  }

  return (
    <>
    <h1>Hello Counter</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>
      Add value
      </button>
    <br/>
    <button onClick={removeValue}>
      Remove Valiue
      </button>
    </>
  )
}

export default App
