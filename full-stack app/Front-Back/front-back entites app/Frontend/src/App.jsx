import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Restarant from"./Components/restarant"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Restarant></Restarant>
    </div>
  )
}

export default App
