import React from 'react';
import { Link } from 'react-router-dom';

function IntroNav(){
  return (
    <div>
      <h3>Careers</h3>
      <Link to="/">About</Link>
      <Link to="/">Careers</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Legal</Link>
      <Link to="/">Investors</Link>
      <Link to="/">Suppliers</Link>
      <hr/>
    </div>

  );
  
}

export default IntroNav;