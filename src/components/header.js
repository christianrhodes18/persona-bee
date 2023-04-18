import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>PERSONA BEE</Link>
          </div>
          <div className='menu'>NEW PERSONA</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
