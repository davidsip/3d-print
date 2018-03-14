import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase, db } from '../../firebase/index';
import withAuthorization from '../../withAuthorization';





const Profile = (props, { authUser }) =>
  
  //  db.ref('users/' + authUser.uid + '/email').once('value');

  <div>
    <h1>
        welcome to Profile, dont get caught in the storm
    </h1>
    <h1>
      {authUser.email}
    </h1>
    <p> this page will be protected </p>
  </div>


Profile.contextTypes = {
  authUser: PropTypes.object,
};





const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);



{/*



  componentDidMount() {
      db.onceGetUsers().then(snapshot =>
        this.setState(() => ({ user: snapshot.val() })) 
      );
  }


{ !!user && <UserNam user={user} /> }


const UserNam = ({ user }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
    
    {Object.keys(user).map(key =>
      <div key={key}>{user[key].email}</div>
    )} 
  </div>





/users/$uid/groups/$group_id for 
// An index to track Ada's memberships
{
  "users": {
    "alovelace": {
      "name": "Ada Lovelace",
      // Index Ada's groups in her profile
      "groups": {
         // the value here doesn't matter, just that the key exists
         "techpioneers": true,
         "womentechmakers": true
      }
    },
    ...
  },
  "groups": {
    "techpioneers": {
      "name": "Historical Tech Pioneers",
      "members": {
        "alovelace": true,
        "ghopper": true,
        "eclarke": true
      }
    },
    ...
  }
}
*/}
