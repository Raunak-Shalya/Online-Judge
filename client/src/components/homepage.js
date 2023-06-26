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
    <>
    <Navbar/>
    <div>
    {problems.map((problem)=>{
      const { Pid, PS, D } = problem;
      return(
        <>
          <h>{Pid}</h>
          <h1>{PS}</h1>
          <a>{D}</a>
        </>
      )
      })}
    </div>
    </>
  )
}

export default Homepage