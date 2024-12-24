import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './Effect.css';

function TypeEffect() {
	return (
		<div className="App">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Welcome To FitFusion.....")
						.pauseFor(1000)
						
						.start();
				}}
			/>
		</div>
	);
}

export default TypeEffect;