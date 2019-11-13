import React from 'react';
import { Link } from 'react-router-dom';

function Internship(){
  return(
    <div>
      <h3>University Students</h3>
      <p>If you're a student with an interest in accelerating the world’s transition to sustainable energy, then apply for one of our intern/co-op positions.</p>
      <Link to="/">Browse Openings</Link>
    </div>
  );
}

export default Internship;