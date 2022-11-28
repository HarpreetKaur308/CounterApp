import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Navbar
                        <span className='badge text-bg-secondary text-bg-pill'>
                            { totalCounters }
                            
                        </span>
                    </a>
                </div>
        </nav>
      );
};
 
export default NavBar;