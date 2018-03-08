import React, { Component } from 'react';
import {database} from '../../firebase';
import {Productframe} from './framework/productframe';
const ProductPage = ( ) =>
<div>
<h1>Designs</h1>
<Products />     
</div>
  class Products extends Component {
  render() {
    return (
      <div className = "container-fluid">
      <div className = "design">
           
      </div>

      </div>

    );
  }
}

export default Products;
