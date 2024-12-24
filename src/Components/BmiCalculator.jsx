//App.js 
import React, { useState } from 'react'; 
import './BMI.css'; 
import { Link } from 'react-router-dom';


function BmiCalculator() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = () => { 
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 
			setHeightValue('');
			setWeightValue('');

			let message = ''; 
			if (bmi < 18.5) { 
				message = 'Escalate your protein intake.You are Underweight'; 
			} else if (bmi >= 18.5 && bmi < 25) { 
				message = 'Stay where you are.You are Normal weight'; 
			} else if (bmi >= 25 && bmi < 30) { 
				message = 'Time to slack off those sugars.You are Overweight'; 
			} else { 
				message = 'Time to hit the Gym.You are obese'; 
			} 
			setBmiMessage(message); 
		} else { 
			setBmiValue(''); 
			setBmiMessage(''); 
		} 
	}; 

	return ( 
		<div className='bmimain'>
		<div>
		
		</div>
		<br/><br/><br/><br/>
		<div className="container" style={{backgroundColor:'#cccccc00'}}> 
			<h1 className='h1'>BMI Calculator</h1> 
			<div className="input-container"> 
				<label htmlFor="height">Enter Your Height (cm):</label> 
				<input 
					type="number"
					id="height"
					value={heightValue} 
					onChange={(e) => setHeightValue(e.target.value)} 
				/> 
			</div> 
			<div className="input-container"> 
				<label htmlFor="weight">Enter Your Weight (kg):</label> 
				<input 
					type="number"
					id="weight"
					value={weightValue} 
					onChange={(e) => setWeightValue(e.target.value)} 
				/> 
			</div> 
            <br/>
            <div>
			<button className="calculate-btn" onClick={calculateBmi} style={{borderRadius:'12px'}}> 
            Calculate BMI 
			</button> 
			<br></br>
			<Link to='/Home' style={{textDecoration:'none'}}>
			<button className="calculate-btn" style={{borderRadius:'12px'}}> 
            Back to home
			</button> 
			</Link>
            </div>
			{bmiValue && bmiMessage && ( 
				<div className="result"> 
					<p> 
						Your BMI: <span className="bmi-value">{bmiValue}</span> 
					</p> 
					<p> 
						Result: <span className="bmi-message">{bmiMessage}</span> 
					</p> 
				</div> 
			)} 
			</div>
		</div> 
	); 
} 

export default BmiCalculator;