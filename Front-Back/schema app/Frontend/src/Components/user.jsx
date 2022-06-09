
import React, { useState } from 'react'

import axios from "axios"

export const User = () => {

   const [userdata, setUserdata]= useState({
      name:"",
      street:"",
      city:"",
      state:"",
      pincode:""
   })

   const handelchange =(e)=>[
      setUserdata({
         ...userdata,
         [e.target.id]: e.target.value
      })
   ]

    const handelsubmit = (e)=>{
      e.preventDefault()
      console.log("hii")
      axios.post("http://localhost:5001/users/create",{name:userdata.name,Address:[{street:userdata.street,city:userdata.city,state:userdata.state,pincode:userdata.pincode}]})
      console.log("hellow")
    }

  return (
    <>
       <form onSubmit={handelsubmit}>
          
          <label htmlFor="">Name</label>
          <input type="text" onChange={handelchange} id="name"/>
          <br /><br />

          <label htmlFor="">street</label>
          <input type="text" onChange={handelchange} id="street" />
          <br /><br />

          <label htmlFor="">city</label>
          <input type="text" onChange={handelchange} id="city"/>
          <br /><br />

          <label htmlFor="">state</label>
          <input type="text" onChange={handelchange} id="state"/>
          <br /><br />

          <label htmlFor="">pincode</label>
          <input type="Number" onChange={handelchange} id="pincode"/>
          <br /><br />


          <input type="submit" value="submit"  />
       </form>

    </>
  )
}
