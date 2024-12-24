import React from 'react'
import './Membership.css'
import IntroDivider from '../Components/IntroDivider'
import IntroDividerr from '../Components/IntroDividerr'
import IntroDividerrr from '../Components/IntroDividerrr'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material'
import Sidenav from '../Layout/Sidenav'




const Membership = () => {
  return (
    <div className='mem'>
    <Sidenav />
  
    <div className='perks'>
    <br></br>
    <br></br>
    
    
    <Container maxWidth="sm" style={{opacity:'80%'}}>
      <Typography component="div" style={{ 
        backgroundColor: 'black', height: '50vh',textAlign:'center',justifyContent:'center',display:'flex',
        padding:'50px',paddingLeft:'10px',color:'white',paddingTop:'70px'
    
      }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul>
      <li><h2>✔ Personalized Workout Plans</h2></li>
      <br></br>
      <li><h2>✔ Advanced Tracking Tools</h2></li>
      <br></br>
      <li><h2>✔ Discounts And Deals</h2></li>
      <br></br>
      <li><h2>✔ Early Access to New Features</h2></li>
      <br></br>
      <li><h2>✔ Ad-Free experience</h2></li>
      </ul>
      </Typography>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>Subscribe Now !!</h1>
    <br></br>
    

    </div>
    <table>
    <th>
    <tr>
    <td><IntroDivider/></td>
    <td><IntroDividerr/></td>
    <td><IntroDividerrr/></td>
    </tr>
    </th>
    </table>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default Membership