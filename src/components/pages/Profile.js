import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase/index';
//import { PasswordForgetForm } from '../PasswordForget';
//import PasswordChangeForm from '../PasswordChange';
//import withAuthorization from '../Session/withAuthorization';
/*
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

class Profile extends Component{

  //firebase.auth().currentUser

  render(){
    return(
      <h1>
        welcome to Profile, dont get caught in the storm
      </h1>
    );
  }
}

export default Profile;