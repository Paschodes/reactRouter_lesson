import React from 'react'
import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Education from './Education';
import Career from './Career';

const About = () => {
  return (
    <div>
      <h2>My name is Paschodes, I'm a Software Engineer.</h2>
      <Link to='/about/education'>My Education</Link>
      <Link to='/about/career'>My Career</Link>

   {/* placeholder for nested routes */}
      <Outlet /> 

      {/* <Routes>
        <Route path='/about/education' element={<Education />}/>
        <Route path='/about/career' element={<Career />}/>
      </Routes> */}
    </div>
  )
}

export default About;