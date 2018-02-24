// SignUp.js
// From "The Road to React with Firebase" ebook
// by: Robin Wieruch
import React, { Component } from 'react'; 
import { Link,
         withRouter,
} from 'react-router-dom'; // todo: where go after sign up
import { auth } from '../../firebase/';
import * as routes from '../../constants/routes';


const SignUpPage = ({ history }) => 
	<div>
    <h1><center>Get started with 3D Print!</center></h1>
    <h5><center>we love you</center></h5>
    <SignUpForm history={history} />
  </div>

// initialize state of component
// contains pertinant user info
// and an error state
const INITIAL_STATE ={
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component{ 
  constructor(props) {
    super(props); 
    // {...INITIAL_STATE}
    this.state = { ...INITIAL_STATE}; //todo change link
  }

  onSubmit = (event) =>{
    const{
      username,
      email,
      passwordOne,
    } = this.state;

    const{
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({...INITIAL_STATE}));
        history.push(routes.HOME);
      })
      .catch(error =>{
        this.setState(byPropKey('error',error));
      });

      event.preventDefault();
  }

  render(){
    const{
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;  

    // isInvalid used to make submit button 'notclicky'
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === ''          ||
      email       === ''          ||
      username    === ''          ;

    return (
      <div className= "signForm">
        <div className= "formBox">
          <form onSubmit={this.onSubmit}>
            <h3>Get Started</h3>
            <div className= "inputField">          
              <input
                value={username} // TODO: BREAK UP THIS LONG LINE
                onChange={event => this.setState(byPropKey('username', event.target.value))}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className= "inputField">
              <input
                value={email}
                onChange={event => this.setState(byPropKey('email',event.target.value))} 
                type="text"
                placeholder="Email Address"
              />
            </div>  
            <div className= "inputField">  
              <input
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className= "inputField">  
              <input
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo',event.target.value))}      
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button disabled={isInvalid} type="submit">
              Sign Up
            </button>
            { error && <p>{error.message}</p> }
          </form>
        </div> 
      </div>

    );
  }
   
}
  
const SignUpLink = () => 
  <p>
    Don't have an account?
      {' '}
      <Link to="/SignIn/SignUp">Sign Up</Link> 
  </p>

export default withRouter(SignUpPage);
  
export{ 
  SignUpForm, 
  SignUpLink,
};
