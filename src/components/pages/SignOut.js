// 
// SignOut.js
// 
import React from 'react';
import { auth } from '../../firebase/';
const SignOutButton = () => 
  <div className = "sOutButton">
  	<button type="button" onClick={ auth.doSignOut }>
    	Sign Out
  	</button>
  </div>
export default SignOutButton;
