//inbetween imports from database and button needs an onclick
import React, { Component } from 'react';
class Productframe extends Component{
    const INITIAL_STATE = {
    productname: '',
    designer: '',
    description: '',
    price: '',
    picture: null,
    error: null,
  };
    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }
    render(){
        return(
            <p>Product Name:</p>
            <p>Designer:</p>
            <p>Description:</p>
            <p>Price:</p>
            <button type="button">Price</button>
            
        );
    }
}