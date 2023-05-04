import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav style={{display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/contact'>Contact Me</Link>
        </nav>
    </div>
  )
}

export default Navbar;