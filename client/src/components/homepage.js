import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import '../styles/homepage.css'
import axios from 'axios';
const Homepage = () => {

 const [problems,setproblems]=useState([]);
  
  useEffect(()=>{
    try {
      axios.get("http://localhost:5000/getproblems")
       .then((res) => setproblems(res.data));
    } catch (error) {
      console.log("Error in displaying problems at frontend")
    }
  },[])
  return (
    <div>
    <Navbar/>
    <div className='body'>
      <div className='problemscontainer'>
      {problems.map((problem)=>{
      const { Pid, PS, D } = problem;
      return(
        <div className='problemcontainer'> 
          <a>{Pid}</a>
          <a>{PS}</a>
          <a>{D}</a>
        </div>
      )
      })}
      </div>
    </div>
    </div>
  )
}

export default Homepage