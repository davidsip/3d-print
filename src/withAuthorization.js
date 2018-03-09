/*
When you sign out from the home or account page, you will not get any redirect 
even though these pages should be only accessible for authenticated users. 
However, it makes no sense to show a non authenticated user the account page. 
we therefore implement a protection for these routes in case a 
user signs out. This process is called authorization.
It checks whether there is an authenticated user. 
If there isn’t an authenticated user, it will redirect to a public route.
Otherwise, it will do nothing. The condition could be defined as 
simple as: authUser != null. In contrast, a more specific authorization could 
be role or permission based authorization. For instance, authUser.role === 
'ADMIN' would be a role based authorization and authUser.permission.canEditAccount 
=== true would be a permission based authorization. Fortunately, we will 
implement it in a way that you can define the authorization condition 
(predicate) in a flexible way so that you have full control over it in the long run.
Similar to the higher order authentication component, there will be a higher
order authorization component to shield away from the logic. It is not used on
the App component, but can be used on all components which are associated
with a route in the App component. Thus it can be reused for the HomePage
and Profile components. 

What’s the task of the higher order component?
First of all, it gets the condition passed as configurational parameter. 
That way you can decide on your own if it should be a general or specific authorization rule
Second, it has to decide based on the condition whether it should 
redirect to a public page because the user isn’t authorized to view the current page.


First, have a look at the render method. It renders either the passed 
component (e.g. HomePage, AccountPage) or nothing. That’s just a fallback in 
case there is no authenticated
   
user in React’s context object. It increases the protection of the component
by rendering simply nothing. However, the real logic happens in the componentDidMount()
lifecycle method. Same as the withAuthentication() higher order component, 
it uses the Firebase listener to trigger a callback function in case the 
authenticated user object changes. Every time the authUser changes, it
checks the passed authCondition() function with the authUser. If the 
authorization fails, the higher order component redirects to the sign in 
page. If it doesn’t fail, the higher order component does nothing. In order
to be able to redirect, the higher order component has access to the
history object of the Router by using the in-house withRouter()
higher order component from the React Router library.
In the next step, you can use the higher order component to protect
your routes (e.g. /home and /account) with authorization rules. For the sake
of keeping it simple, the following two components are only protected with
a general authorization rule that checks if the authUser object is not null.
First, wrap the HomePage component in the higher order component and define the 
authorization condition for it. As mentioned, it checks if the user object is not null.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from './firebase/index';
import * as routes from './constants/routes';



const withAuthorization = (authCondition) => (Component) => {

  class WithAuthorization extends React.Component {
    componentDidMount(){
      firebase.auth.onAuthStateChanged(authUser => {
        if( !authCondition(authUser)){
          this.props.history.push(routes.SIGN_IN );
        }
      });
    }
    
    render(){
      return this.context.authUser ? <Component /> : null;
    }

  } 

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object,
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;












