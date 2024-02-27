import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='navbar'>
        <h2 className='logo'><Link className='logoLink' to="/">DAILY BURNOUT</Link></h2>
        <ul className='navLinks'>
            <li className='linkLI'>
            <Link className='NavLink' to="/">Home</Link>
            </li>
            <li className='linkLI'>
            <Link className='NavLink' to="/Workout">Workout</Link>
            </li>
            <li className='linkLI'>
            <Link className='NavLink' to="/Nutrition">Nutrition</Link>
            </li>
            <li className='linkLI'>
            <Link className='NavLink' to="/BMI">BMI</Link>
            </li>
            <li className='linkLI'>
            <Link className='NavLink' to="/About">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
