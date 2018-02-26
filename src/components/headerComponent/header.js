import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SignOutButton from '../pages/SignOut';
//import Time from './components/headerComponent/time';


class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          3D Print
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Designs</Link>
            </li>
            <li>
              <Link to="/Contacts">Contacts</Link>
            </li>
            
            {/*todo: fix className last}
            {/*<li className="last">*/}
            <li className="sIn">
              <Link to="/SignIn">Sign In</Link>
            </li> 
            <li className="sOut">
              <Link to='/SignOut'>Sign Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
