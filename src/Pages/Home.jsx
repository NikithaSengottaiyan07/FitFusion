import home from "../Assets/home.jpg";
import Contactbg from "../Assets/Contactbg.jpeg";
import React from "react";
import "./Home.css";
import CustomizedButtons from "../Components/CustomizedButtons";
import MultiActionAreaCard from "../Components/MultiActionAreaCard";
import MultiActionAreaCardd from "../Components/MultiActionAreaCardd";
import MultiActionAreaCarddd from "../Components/MultiActionAreaCarddd";
import MultiiActionAreaCard from "../Components/MultiiActionAreaCard";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import TypeEffect from "../Components/TypeEffect";
import SwipeableTextMobileStepper from "../Components/SwipeableTextMobileStepper";
import SwipeableTextMobileStepper1 from "../Components/SwipeableTextMobileStepper1";
import SwipeableTextMobileStepper2 from "../Components/SwipeableTextMobileStepper2";
import SwipeableTextMobileStepper3 from "../Components/SwipeableTextMobileStepper3";
import Navbar from "../Layout/Navbar";
import CustomizedButtonsBMI from "../Components/CustomizedButtonsBMI";
import ExerciseSearch from "./targetmusapi";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="home"
        id="Home"
        style={{ fontSize: "30px", backgroundImage: `url(${home})` }}
      >
        <header>
          <div>
            <TypeEffect />
          </div>
          <br></br>
          <p style={{ fontSize: "35px" }}> Empower Your Fitness Journey</p>
          <ExerciseSearch/>
          <br></br>
        </header>
        <main>
          <CustomizedButtons />
        </main>
      </div>
      <div className="work" id="Workouts">
        <div>
          <br></br>
          <br></br>
        </div>
        <header className="head">
          <h1>
            <br />
            <h1>
              The ultimate guide towards<br></br> empowering your fitness
              journey
            </h1>
          </h1>
          <br></br>
          <br></br>
        </header>
        <table>
          <th>
            <tr className="vid">
              <td>
                <MultiActionAreaCard />
              </td>
              <td>
                <MultiActionAreaCardd />
              </td>
              <td>
                <MultiActionAreaCarddd />
              </td>
              <td>
                <MultiiActionAreaCard />
              </td>
            </tr>
          </th>
        </table>
      </div>
      <div className="pro" id="Programs">
        <div className="scroll">
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
            Our Diverse Programs Include
          </h1>
          <br></br>

          <table>
            <tr>
              <td>
                <SwipeableTextMobileStepper />
              </td>
              <td>
                <SwipeableTextMobileStepper1 />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <SwipeableTextMobileStepper2 />
              </td>
              <td>
                <SwipeableTextMobileStepper3 />
              </td>
            </tr>
          </table>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="bmic" id="BMIc">
      <br /><br /><br /><br />
      <div className="txt">
      <br/><br/><br/><br/><br/><br/>
      <h1>CALCULATE YOUR BMI</h1>
      <p>BMI or Body Mass Index is used to determine if you are in a <br/>healthy weight range for your height</p>
      <br/>
      <CustomizedButtonsBMI/>
      </div>
      </div>
      <div
        className="con"
        id="ContactUs"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
      <br /><br /><br /><br />
        <table>
          <tr>
            <td>
              &emsp;&emsp;&emsp;
              <BsTelephoneFill fontSize={40} className="icon" />
              <br></br>
              <br></br>
              <br></br>
              <h2>PHONE</h2>
              <h3>307-757-7967</h3>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <FaLocationDot fontSize={40} className="icon" />
              <br></br>
              <br></br>
              <br></br>
              <h2> ADDRESS</h2>
              <h3>
                123,Lexington plaza,<br></br>
                Coimbatore
              </h3>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <IoIosMail fontSize={50} className="icon" />
              <br></br>
              <br></br>
              <br></br>
              <h2>GMAIL</h2>
              <h3>fitfusion123@gmail.com</h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;