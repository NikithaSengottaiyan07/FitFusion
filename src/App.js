
import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import Membership from './Pages/Membership';
import LoginAcc from './Pages/LoginAcc';
import BmiCalculator from './Components/BmiCalculator';
import SignUpacc from './Pages/SignUpacc';
import CheckoutForm from './Pages/CheckoutForm';
import CheckoutFormm from './Pages/CheckoutFormm';
import CheckoutFormmm from './Pages/CheckoutFormmm';
import Checkoutsuccess from './Pages/Checkoutsuccess';
import MyIframeComponent from './Pages/IF';
import MyIframeComponentt from './Pages/IFF';
import MyIframeComponenttt from './Pages/IFFF';
import MyIframeeComponent from './Pages/IIF';
import FitnessDataa from './Pages/Apitest';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<LoginAcc/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="Membership" element={<Membership/>}/>
    <Route path="LoginAcc" element={<LoginAcc/>}/>
    <Route path="SignUpacc" element={<SignUpacc/>}/>
    <Route path="BMI" element={<BmiCalculator/>}/>
    <Route path="CheckoutForm" element={<CheckoutForm/>}/>
    <Route path="CheckoutFormm" element={<CheckoutFormm/>}/>
    <Route path="CheckoutFormmm" element={<CheckoutFormmm/>}/>
    <Route path="Checkoutsuccess" element={<Checkoutsuccess/>}/>
    <Route path="IF" element={<MyIframeComponent/>}/>
    <Route path="IFF" element={<MyIframeComponentt/>}/>
    <Route path="IFFF" element={<MyIframeComponenttt/>}/>
    <Route path="IIF" element={<MyIframeeComponent/>}/>
    <Route path="Apitest" element={<FitnessDataa/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App