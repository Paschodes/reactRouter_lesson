import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    // getting useNavigate for navigating programatically
    const navigate = useNavigate();

    const handleClick = () => {
        // navigate('');
        // if we want to navigate to anoda page instead... you just add the path to the navigate
        // navigate('contact');
        // if we want to go back to the previous page/route we simply put -1
        navigate(-1) 
    }
  return (
    <nav>
        <div className='nav-items container'>
            <div className='logo'>
                <a href='/'>
                    <h1>Paschodes</h1>
                </a>
            </div>

            <ul >
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About Me</NavLink></li>
                <li><NavLink to='/books'>My Books</NavLink></li>
                <li><NavLink to='/contact'>Contact Me</NavLink></li>

                {/* navigating programatically */}
                <li><button className='btn' onClick={handleClick}>Go Back</button></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar;