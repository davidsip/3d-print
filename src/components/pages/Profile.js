import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase/index';
import withAuthorization from '../../withAuthorization';
//import { PasswordForgetForm } from '../PasswordForget';
//import PasswordChangeForm from '../PasswordChange';
//import withAuthorization from '../Session/withAuthorization';
/*


/*
class Profile extends Component{

  //firebase.auth().currentUser

  render(){
    return(
      
    );
  }
}

export default Profile;

const AccountPage = (props, { authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(
AccountPage);
*/


const Profile = (props, { authUser }) =>
  <div>
    <h1>
        welcome to Profile, dont get caught in the storm
    </h1>
    <p1> this page will be protected </p1>
  </div>

Profile.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);
