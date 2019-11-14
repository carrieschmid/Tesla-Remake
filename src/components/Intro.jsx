import React from 'react';
import MissionTesla from '../assets/images/MissionTesla.jpg';
import { Link } from 'react-router-dom';
// import Tesla1 from '../assets/images/Tesla1.jpeg';



function Intro (){
 var introStyle =  {
  // contentAlign: 'center',
  backgroundImage:`url(${MissionTesla})`
 }
  return(
    
    <div style = {introStyle}>

      {/* <img src= {MissionTesla}/> */}
      <body style={introStyle}>
        
     
      <h3>Careers</h3>
      <Link to="/">About</Link>
      <Link to="/">Careers</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Legal</Link>
      <Link to="/">Investors</Link>
      <Link to="/">Suppliers</Link>
      <hr/>
      </body>
    </div>
  );
}
export default Intro;