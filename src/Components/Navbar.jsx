import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Fetch" >Fetch</Link>
                <Link to="/Games">Games</Link>
                <Link to="/About">About</Link>
                <Link to="/Task">Task</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar