import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">

      <h1>
        Welcome to the Login!
      </h1>
      <p>
        email address::::::::::      
      </p>
      <p>
        pasword::::::::      
      </p>
      <p>
        Login button
      </p>
      <p>
        forgot pasword button -> link to forgot password      
      </p>

      <Link to="/Login/SignUp">Sign Up</Link> 

      </div>

    );
  }
}

export default Login;

/*
this is where im keeping this for now.
its all the sexy firebase stuff
<script src="https://www.gstatic.com/firebasejs/4.10.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8uoLEajmdN8rw8EDoIKggOHSDAJg8YXg",
    authDomain: "printer-1c171.firebaseapp.com",
    databaseURL: "https://printer-1c171.firebaseio.com",
    projectId: "printer-1c171",
    storageBucket: "printer-1c171.appspot.com",
    messagingSenderId: "198617925096"
  };
  firebase.initializeApp(config);
</script>
*/
