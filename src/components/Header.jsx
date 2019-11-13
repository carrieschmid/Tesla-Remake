import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var headerStyle ={
    backgroundColor:'#adafb3',
    paddingLeft: '100px',
    paddingRight: '100px'
    
  };
  var navBarStyle = {
    backgroundColor: 'pink',
    content: 'center',
    paddingLeft: '30px',
    paddingRight: '30px'
  };

  var header ={
    fontFamily: "TESLA",
    color: 'white',
    paddingRight: '30px'
  }




  return (
    <div className="navbar" style = {headerStyle}>



    <h3 style={header} className= "navbar-brand">Tesla</h3>
      <navbar/>
        <navLink to="/">Model S</navLink>
        <navLink to="/">Model 3</navLink>
        <navLink to="/">Model X</navLink>
        <navLink to="/">Model Y</navLink>
        <navLink to="/">Roadster</navLink>
        <navLink to="/">Energy</navLink>
    </div>

  );

}

export default Header;