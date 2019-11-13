import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Model S</Link>
      <Link to="/">Model 3</Link>
      <Link to="/">Model X</Link>
      <Link to="/">Model Y</Link>
      <Link to="/">Roadster</Link>
      <Link to="/">Energy</Link>
    </div>

  );

}

export default Header;