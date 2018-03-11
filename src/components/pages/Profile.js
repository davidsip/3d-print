import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase/index';
import withAuthorization from '../../withAuthorization';


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
