import React from 'react';
import MissionCars from './MissionCars';
import MissionCharge from './MissionCharge';
import MissionEnergy from './MissionEnergy';


function MissionStatement() {
  return (
    <div>
      <h2> Tesla's Mission</h2>,
      <p> Tesla's mission is to accelerate the world's transistion to the sustainable energy. We hire the world's greatest and brightest people to help make this future a reality.</p>,
      <MissionCars/>,
      <MissionCharge/>,
      <MissionEnergy/>
    </div>  
  );
}
export default MissionStatement;