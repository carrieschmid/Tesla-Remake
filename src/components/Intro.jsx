import React from 'react';
import { IntroNav } from './IntroNav';
import TeslaPhoto from '../assets/images/telsaPhoto.jpg';


function Intro (){
  return(
    <div>
      <IntroNav/>
      <img src ={TelsaPhoto}/>
    </div>
  );
}
export default Intro;