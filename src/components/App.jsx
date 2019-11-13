import React from 'react';
import Disclaimer from './Disclaimer';
import Internship from './Internship';
import Header from './Header';
import MissionStatement from './MissionStatement';
import Intro from './Intro';
import WorkTesla from './WorkTesla';
import SeeAllJobs from './SeeAllJobs';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div> 
      <Header/>
      <Intro/>
      <SeeAllJobs/>
      <MissionStatement/>
      <WorkTesla/>
      <Internship/>
      <Disclaimer/>
    </div>
  );
}
export default App;