import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router';

const Problem = ({ Pid, PS, D, PD }) => {
  // const location=useLocation();
  // const {problem}=location.state;
  // const { PS } = problem;

  return (
    <>
      <div>
        {PS}
      </div>
    </>
  );
};

export default Problem;