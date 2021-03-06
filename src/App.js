import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
//import { auth } from './firebase/firebase';
import { firebase } from './firebase/index';
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
import Profile  from './components/pages/Profile';
import TempDesigns  from './components/pages/tempdesigns';
import withAuthentication from './withAuthentication';
//import Time from './components/headerComponent/time';

// rewrite App as a const arrow functions
// App will act as our router only and
// other components will handle protected paths
const App = () =>
  <Router>
    <div className="App">
      <div className="wrapper">
          <Header />
        {/* handled in header <Header authUser={this.state.authUser} />*/}
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/SignIn/SignUp' component={SignUp}/>
          <Route exact path='/SignOut' component={SignOut}/>
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/temp' component={TempDesigns} />
        <Footer/>
      </div>

    </div>
    </Router>

export default withAuthentication(App);
