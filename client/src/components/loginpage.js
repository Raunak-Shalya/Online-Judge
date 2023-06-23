import React from 'react'
import '../styles/loginpage.css'
const Loginpage = () => {
  const handleOnClick=()=>{
   window.open('http://localhost:5000/auth/google', '_self');
  }
  return (
    <div className='container'>
      <h1 className='Heading'>Online Judge</h1>
      <h1>
  <span>always be</span>
  <div class="message">
    <div class="word1">Ready</div>
    <div class="word2">to</div>
    <div class="word3">Code</div>
  </div>
</h1>
    <button className='btn'onClick={handleOnClick}> Login</button>
    </div>
  )
}

export default Loginpage