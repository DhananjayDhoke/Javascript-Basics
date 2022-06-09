import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { User } from './Components/user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <User></User>  

    </div>
  )
}

export default App
