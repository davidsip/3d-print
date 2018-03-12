import React, { Component } from 'react';
import {database} from '../../firebase';
import {Productframe} from './framework/productframe';
  class Products extends Component {
  componentDidMount() {
      database.onceGetElements()
          .then(snapshot => 
                this.setState(() => ({elements: snapshot.val()}))
                );
  }
  render() {
      const { elements } = this.state;
    return (
        <div>
        <h1>Products</h1>
        { !!elements && <ItemList elements={elements} /> }
        </div>
    );
  }
      
}


const ItemList = ({ elements }) =>
<div>
<h2>This Is a list of all of the Available Designs</h2>
    
</div>

export default Products;
