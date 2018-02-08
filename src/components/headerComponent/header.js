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
          LOGO
        </div>


        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li className="last">
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
