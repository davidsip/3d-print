import React, { Component } from 'react';
import {db} from '../../firebase';
import {Productframe} from './framework/productframe';
  class Products extends Component {
  componentDidMount() {
      db.onceGetUsers()
          .then(snapshot => 
                this.setState(() => ({users: snapshot.val()}))
                );
  }
  render() {
      const { users } = this.state;
    return (
        <div>
        <h1>Products</h1>
        { !!users && <ItemList users={users} /> }
        </div>
    );
  }
      
}


const ItemList = ({ elements }) =>
<div>
<h2>This Is a list of all of the Available Designs</h2>
    
</div>

export default Products;
