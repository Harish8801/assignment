import React from 'react';
import "./navbar.css";
import Logo from './navbar/Logo';
import Link from './navbar/Link';


function Navbar() {
  return (
      <>
    <div className='container'>
        <div className='main'>
            <div>
                <Logo/>
            </div>
            <div>
                <Link/>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar