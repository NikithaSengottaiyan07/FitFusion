import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo"><img src='https://t3.ftcdn.net/jpg/05/13/15/12/360_F_513151222_AgvoFd0tvecsKwLY45Cqt0gLf1ckIWht.jpg' alt="logo"></img><h3>FITFUSION</h3></div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <AnchorLink href='#Home' className="nav-link">Home</AnchorLink>
        </li>
        <li className="nav-item">
        <AnchorLink href='#Workouts' className='nav-link'>Workouts</AnchorLink>
        </li>
        <li className="nav-item">
        <AnchorLink href='#Programs' className='nav-link'>Programs</AnchorLink>
        </li>
        <li className="nav-item">
        <AnchorLink href='#BMIc' className='nav-link'>BMI Calculator</AnchorLink>
        </li>
        <li className="nav-item">
        <AnchorLink href='#ContactUs' className='nav-link'>Contact Us</AnchorLink>
        </li>
        <li>&emsp;</li>
      </ul>
    </nav>
    
    </div>
  )
}

export default Navbar