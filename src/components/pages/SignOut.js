// 
// SignOut.js
// 

import React from 'react';
import { auth } from '../../firebase/';
import { Link } from 'react-router-dom'

const SignOutButton = () => 
  <div className = "sOutButton">
  	<button type="button" onClick={ auth.doSignOut }>
    	<Link to="/SignIn">Sign Out </Link>
  	</button>
  </div>


export default  (SignOutButton);
