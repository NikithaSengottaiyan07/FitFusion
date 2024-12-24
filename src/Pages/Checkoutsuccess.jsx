import React from 'react'
import './Sucess.css'
import { Link } from 'react-router-dom'


const Checkoutsuccess = () => {
  return (
    <div>
    <div style={{backgroundColor:'black'}}>
    <Link to='/Home'>
    <button style={{backgroundColor:'orangered',borderRadius:'4px',height:'45px'}}><h4 >Back to Home</h4></button>
    </Link>
    </div>
    <div className='suc'>
    <h1>Purchase Successfull!!</h1>
    </div>
    </div>
  )
}

export default Checkoutsuccess