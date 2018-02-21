import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
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
            <li className="last">
              <Link to="/SignIn">SignIn</Link>
            </li> 
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
