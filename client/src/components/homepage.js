import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import '../styles/homepage.css'
import axios from 'axios';
import Problem from './problem';
import { Link } from 'react-router-dom';

const Homepage = () => {

const [problems,setproblems]=useState([]);
  
  useEffect(() =>{
    const fetchdata=async()=>{
      try {
        const response=await axios.get("http://localhost:5000/getproblems")
         setproblems(response.data);
      } catch (error) {
        console.log("Error in retrieving problems from backend")
      }
    }
    fetchdata();
  }
    ,[])
  const onClickProblem=(key)=>{
     console.log(key);
  }
  // return (
  //   <div>
  //   <Navbar/>
  //   <div className='body'>
  //     <div className='problemscontainer'>
  //     {problems.map((problem)=>{
  //     const { Pid, PS, D, PD } = problem;
  //     return(
  //       // <Link key={Pid} to={{ pathname: `/problem/${Pid}`, state: { problem } }} className='problemcontainer'>
  //       //   <a>{Pid}</a>
  //       //   <a>{PS}</a>
  //       //   <a>{D}</a>
  //       // </Link>
        
  //     )
  //     })}
  //     </div>
  //   </div>
  //   </div>
  // )
  return (
    <div>
      {
        problems.map(p => (
          <Problem props={p} />
        ))
      }
    </div>
  );
}

export default Homepage