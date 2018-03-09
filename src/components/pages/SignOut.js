// 
// SignOut.js
// 
//import * as routes from '../../constants/routes';
import React from 'react';
import { auth } from '../../firebase/';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
//import withAuthorization from '../../withAuthorization';



const SignOutButton = () => 
  <div className = "sOutButton">
  	<button type="button" onClick={ auth.doSignOut }>
    	<Link to="/SignIn">Sign Out </Link>
  	</button>
  </div>


export default  (SignOutButton);
