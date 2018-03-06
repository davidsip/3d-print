import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { auth } from './firebase/firebase';
//import { firebase } from './firebase';
//import * as firbase from 'firebase'
//includes
import './Assets/css/default.min.css';

//components
import Header   from './components/headerComponent/header';
import Footer   from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import SignIn   from './components/pages/SignIn';
import SignUp   from './components/pages/SignUp';
import SignOut  from './components/pages/SignOut';
//import Time from './components/headerComponent/time';

class App extends Component {
  /*
  constructor(props){
    super(props);

    this.state={
      authUser: null,
    };
  }

 
  componentDidMount(){
    //firebase.auth.Auth.onAuthStateChanged(authUser => {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }
  */
  
  constructor(props){
    super(props);

    this.state={
      authUser: null,
    };
  }

  getChildContext(){
    return{
      authUser: this.state.authUser,
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser:null}));
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="wrapper">
          <Header authUser={this.state.authUser} />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/SignIn/SignUp' component={SignUp}/>
            <Route exact path='/SignOut' component={SignOut}/>
          <Footer/>
        </div>

      </div>
      </Router>
    );
  }

}

export default App;
