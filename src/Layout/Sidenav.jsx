import React from 'react';
import './Sidenav.css';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';


class Sidenav extends React.Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <Link to="/Home">Home</Link>
          <Link to="/BMI">BMI Calculator</Link>
          <Link to="/">Logout</Link>
        </div>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
        <span onClick={this.openNav}><OtherHousesIcon style={{fontSize:'50px' , color:'orangered'}} />
        </span>
        <h2 style={{color:'white', padding:'10px'}}>Menu</h2>
        </div>

        <div id="main">
          {/* Your page content goes here */}
        </div>
      </div>
    );
  }
}

export default Sidenav;