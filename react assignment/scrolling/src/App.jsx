import { useEffect } from 'react'
import { useState } from 'react'
 import axios from "axios"

import './App.css'


 const Page_Number =1
function App() {
  const [state, setState] = useState([])
  const [page, setPage] = useState(Page_Number)
   
  useEffect(()=>{
    fetch(`http://localhost:3001/list?page=${page}$size=20`)
    .then(res=>res.json())
    .then(data=> setState([...state,...data]))
  },[page])
  
  const scrolleToEnd =()=>{
    setPage(page+1)
  }
  

  window.onscroll = function(){
    // checking the page scroll to the bottom 
    if(window.innerHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight){
    }
    scrolleToEnd()
  }

  console.log(state)
  return (
    <div className="App">
       {state.length>0 &&state.map((e,i)=><h1 key={i}>{e.student}</h1>)}
    </div>
  )
}

export default App
