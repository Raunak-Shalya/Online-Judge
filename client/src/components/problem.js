  import React, { useState } from 'react';
  import Navbar from './NavBar';
  import { useLocation } from 'react-router';
  import '../styles/problem.css'
  import axios from 'axios';
  const Problem = () => {
    const Location=useLocation();
    const problem=Location.state;
    const { Pid, PS, D, PD } = problem;
    let curcode='';
    function replaceWithBr() {
      return PD.replace(/\\n/g,"<br />")
    }
    
    const updateCode=(event)=>{
      curcode=event.target.value;
    }
    const onClickSubmitHandler=()=>{
      axios.post("http://localhost:5000/submit",{language:'cpp',code:curcode,Pid:Pid})
      .then(console.log('code submitted'))
    }
    return (
      <>
      <Navbar/>
      <div className='page'>
        <div className='lefthalf'>
          <h1 className='PS'>{Pid}. {PS}</h1>
          <p className='PD' dangerouslySetInnerHTML={{__html: replaceWithBr()}} />
        </div>
        <div className='righthalf'>
          <textarea className='texteditor' onChange={updateCode}>*Enter Code here*</textarea>
          <button className='submitbutton' onClick={onClickSubmitHandler}>Submit</button>
        </div>
      </div>
      </>
    );
  };

  export default Problem;