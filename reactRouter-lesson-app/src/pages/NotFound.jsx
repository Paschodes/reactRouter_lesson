import React from 'react'
import { useNavigate } from 'react-router';


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>NotFound</h1>
        <p>We couldn't find the page you are looking for But you still have a lot to know about me and my website</p>

        <button onClick={() => navigate('')}>Go Home</button>
    </div>
  )
}

export default NotFound;