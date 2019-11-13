import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var headerStyle ={
    backgroundColor:'#adafb3',
    paddingLeft: '30px',
    paddingRight: '200px',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold'
    
    
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
    paddingRight: '150px',
    textAlign: 'center'
  }




  return (
    <div className="navbar" style = {headerStyle}>



    <h3 style={header} className= "navbar-brand">Tesla</h3>
      <navbar/>
        <navLink to="/">MODEL S</navLink>
        <navLink to="/">MODEL 3</navLink>
        <navLink to="/">MODEL X</navLink>
        <navLink to="/">MODEL Y</navLink>
        <navLink to="/">ROADSTER</navLink>
        <navLink to="/">ENERGY</navLink>
    </div>

  );

}

export default Header;