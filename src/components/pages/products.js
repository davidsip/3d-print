import React, { Component } from 'react';
import {db} from '../../firebase/index';
import withAuthorization from '../../withAuthorization';
import {Productframe} from './framework/productframe';
  class Products extends Component {
      constructor(props){
          super(props);
          this.state={
              users: {}
          };
      }
  componentDidMount() {
      db.onceGetUsers()
          .then(snapshot => 
                this.setState(() => ( {users: snapshot.val() }))
                );
  }
  render() {
      const { users } = this.state;
    return (
        <div className = "container-fluid">
        <h1>Products</h1>
        { !!users && <ItemList users={users} /> }
        </div>
    );
  }
      
}


const ItemList = ({ users }) =>
<div>
<h2>This Is a list of all of the Available Designs</h2>
    {Object.keys(users).map(key =>
                           <div key={key}>{Productframe(users[key].username,users[key].username,users[key].username,users[key].username,users[key].username)}</div>) }
</div>
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Products);
