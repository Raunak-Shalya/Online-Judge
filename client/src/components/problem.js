import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router';
import '../styles/problem.css'

const Problem = () => {
   const Location=useLocation();
  const problem=Location.state;
  const { Pid, PS, D, PD } = problem;
  console.log(PD);
  function replaceWithBr() {
    return PD.replace(/\\n/g,"<br />")
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
        <textarea className='texteditor'>*Enter Code here*</textarea>
        <button className='submitbutton'>Submit</button>
      </div>
    </div>
    </>
  );
};

export default Problem;