
import React, { useEffect, useState } from 'react'
 import axios from "axios"
 import "./restarant.css"
import {useSearchParams} from "react-router-dom"

import PaginationControlled from './Pagination'
function Restarant() {

     const [resData, setResData]= useState([])
     const [page, setPage]= useState(1)

     const [setparam, setSearchParms]=useSearchParams()
    
     useEffect(()=>{
        getdata()
        setSearchParms({page:page})
    },[page])
    
     const getdata=()=>{
      axios.get(`http://localhost:5000/res/?page=${page}`).then(({data})=>setResData(data.data))
     }
      function getpagedata(page){
        setPage(page)
       
    

      }
      
    const handelselect = (e)=>{
    
     // axios.get(`http://localhost:5000/filter`).then(({data})=>setResData(data.data))
      
     
      let newdata=resData.filter((el)=>{
        if(el.category.includes(e.target.value)){
          return true
        }
        else{
          return false
        }
      })
      setResData([...newdata])
     
     
    }
    const handelSort = (e)=>{
    
      // axios.get(`http://localhost:5000/sort`).then(({data})=>setResData(data.data))
      //axios.get('http://localhost:5000/res').then(({data})=>console.log(data.data))
      
      //console.log(resData)

      if(e.target.value==="low"){
        
        resData.sort((a,b)=>{
          if(a.price>b.price)return 1
          return -1
        })
        setResData([...resData])
      }
      else{
        resData.sort((a,b)=>{
          if(a.price>b.price)return -1
          return 1
        })
        setResData([...resData])
      }
      
      
    }
  return (
    <> 
      <div>
      <label htmlFor="Filter">Filter By Categeory</label>
        <select name="Filter" id="" onChange={handelselect}>
          <option value=""></option>
          <option value="evening">evening</option>
          <option value="breakfast">breakfast</option>
          <option value="dinner">dinner</option>
         

        </select>
      </div>
      <div>
      <label htmlFor="SortBy">Sort By Price</label>
        <select name="SortBy" id="" onChange={handelSort}>
          <option value=""></option>
          <option value="low">Low Price</option>
          <option value="high">High Price</option>
        </select>
      </div>
     
      <div className='maindiv'>

    
    
        {resData.map((e)=>{
            return (
            <div className='subdiv'>
                <img src={e.image} alt="dish img" />
                 <h2>{e.name}</h2>
                 <h4>category : {e.category}</h4>
                 <h4>Price : {e.price}</h4>
                 <p>{e.description}</p>
            </div>

            )
        })}
      </div>
        <PaginationControlled getpage={getpagedata}></PaginationControlled>
    </>
  )
}

export default Restarant