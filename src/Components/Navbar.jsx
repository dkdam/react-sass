import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <a href='/'>Home</a>
            <a href='/About'>About</a>
            <a href='/Team'>Team</a>
            <a href='/Contact'>Contact</a>
        </div>
    )
}

export default Navbar