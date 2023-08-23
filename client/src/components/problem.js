  import React, { useState } from 'react';
  import Navbar from './NavBar';
  import { useLocation } from 'react-router';
  import '../styles/problem.css'
  import axios from 'axios';
  import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
  const Problem = () => {

    const Location=useLocation();
    const problem=Location.state;

    const { Pid, PS, D, PD } = problem;

    let curcode='Type your code here';
    const [verdict,setVerdict]=useState('');

    function replaceWithBr() {
      return PD.replace(/\\n/g,"<br />")
    }
    
    const updateCode=(value,event)=>{
      curcode=value;
    }
    const onClickSubmitHandler = async () => {
      try {
          const response = await axios.post("http://localhost:5000/submit", {
              language: 'cpp',
              code: curcode,
              Pid: Pid
          });
          setVerdict(response.data);
          console.log('code submitted');
          
      } catch (error) {
          console.log(error);
      }
  };
  const verdictButton=()=>{
    if(verdict=='')
    return <button className='noVerdict'>Verdict</button>
    else if(verdict=='Accepted')
    return <button className='gVerdict'>Accepted</button>
    else
    return <button className='rVerdict'>{verdict}</button>
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
          <Editor height='80' className='texteditor' theme='vs-dark' defaultLanguage='cpp' defaultValue={curcode} onChange={updateCode}></Editor>
          <button className='submitbutton' onClick={onClickSubmitHandler}>Submit_&gt;</button>
           {verdictButton()}
        </div>
      </div>
      </>
    );
  };

  export default Problem;