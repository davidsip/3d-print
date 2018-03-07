//SignIn.js
//TODO: reset password options

import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth } from '../../firebase/index';
import { SignUpLink } from './SignUp';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <hi> SignIn</hi>
    <SignInForm history ={history} />
    <SignUpLink />
    <p>
      new user? 
      <button> Sign Up </button>
    </p>
  </div>

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

  class SignInForm extends Component {
    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => { 
      const {
        email,
        password,
      } = this.state;

      const { 
        history,
      } = this.props;

      auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })        
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
      event.preventDefault();

  } 

    render() { 
      const {
        email,
        password,
        error,
      } = this.state;

      
      const isInvalid = 
      password === '' || 
      email === '';

      return (
        
        <form onSubmit={this.onSubmit}>
          <div className= "signInForm">
            <div className= "formBox">
              <h2> Sign In </h2>
              <div className= "inputField">
                  <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                  />
              </div>    
              <div className= "inputField">
                  <input
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                  />
              </div>
                <button disabled={isInvalid} type="submit">
                  Sign In
                </button>
                <p>
                  Don't have an account?
                  {' '}
                  <Link to="/SignIn/SignUp">Sign Up</Link> 
                </p>
            </div>
          </div>
          { error && <p>{error.messge}</p>}
        </form>
        

      );
    }

  }

export default SignInForm
