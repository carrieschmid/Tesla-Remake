import React from 'react';
import GuyOnBike from '../assets/images/GuyOnBike.jpg';
import GirlsSitting from '../assets/images/GirlsSitting.jpg';
import CarTire from '../assets/images/CarTire.jpg';
import GuysWorking from '../assets/images/GuysWorking.jpg';




function WorkingTesla() {
  return(
    <div>
      <h2> Working at Tesla</h2>,
      <p>At Tesla, we're solving the world's most important problems with talented individuals who share our passion to change the world. Our culture is fast-paced, energetic and innovative. Headquartered in the San Francisco Bay Area with office locations around the world, we work to build an inclusive environment in which everyone, regardless of gender, race, religion, age, or background, can do their best work.</p>,
      <img src={GuyOnBike}/>,
      <img src={GirlsSitting}/>,
      <img src={CarTire}/>,
      <img src={GuysWorking}/>
    </div>  
  );
}
export default WorkingTesla;