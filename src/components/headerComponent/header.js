import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SignOutButton from '../pages/SignOut';
//import Time from './components/headerComponent/time';
//https://reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';


// Header Toggling
// Right now this is a tad cumbersome but can be refactored
// Essentially We toggle the header entirely based on
// if the user is signed in

// Const is is used to help with performance and session
// handling.  Most future header development would take place
// under the HeaderWithAuth arrow fcn vs the HeaderNonAuth
//           signed In                       not signed in

/*
const Header = (props, { authUser }) =>
  <div>
    { authUser
        ? <HeaderWithAuth />
        : <HeaderNonAuth />
    }
  </div>
*/


const Header = ({ authUser }) =>
  <div>
    { authUser
      ? <HeaderWithAuth />
      : <HeaderNonAuth />
    }
  </div>

//Navigation.contextTypes = {
//  authUser: PropTypes.object,
//};



const HeaderWithAuth = () =>
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
              <Link to="/Designs">Designs</Link>
            </li>
            <li className = "dropdown-parent">
              <Link to="/Profile">Profile</Link>
              {/* this shall be the account drop down*/}
                  <ul className = "dropdown">
                    <li>
                      here1
                    </li>
                    <li>
                      here2
                    </li>
                    <li>
                      here3
                    </li>
                    <li className="sOut">
                      <Link to='/SignOut'>Sign Out</Link>
                    </li>
                  </ul>
            </li>



            {/*<li className="profile-parrent" >
                <a> Welcome this.user </a>
                <ul className="profile-sub-menu">
                  <li>
                    {/*<Link to='/Profile'>Profile</Link>
                    <a> Profile </a>
                  </li>
                  <li>
                    <Link to='/SignOut'>Sign Out</Link>
                  </li>
                </ul>
            </li>

            <li className="sIn">
              <Link to="/SignIn">Sign In</Link>
            </li>
            */}
          </ul>
        </nav>
    </header>

const HeaderNonAuth = () =>
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
              <Link to="/Designs">Designs</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>

            <li className="sIn">
              <Link to="/SignIn">Sign In</Link>
            </li>
            {/* hidden link for sign out */}
          </ul>
        </nav>
      </header>

export default Header;


{/*
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
              <Link to="/Profile">Profile</Link>
            </li>

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

*/}
