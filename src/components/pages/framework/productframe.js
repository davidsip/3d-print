//inbetween imports from database and button needs an onclick
import React, { Component } from 'react';
    
    const INITIAL_STATE = {
    productname: '',
    designer: '',
    description: '',
    price: '',
    picture: null,
  };

class Productframe extends Component{
    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }   
    
    render(){
        const {
        productname,
        designer,
        description,
        price,
        picture,
      } = this.state;
        return(
            <div classname="designlayout">
            <p>Product Name:</p> 
            <div classname="content">
                {productname}
            </div>
            <p>Designer:</p><div classname="content">
                {designer}
            </div>
            <p>Description:</p><div classname="content">
                {description}
            </div>
            <p>Price: $</p><div classname="content">
                {price}
            <button type="button">Price</button>
                </div>
            <div classname="content">    
                <img src = {picture} alt = "Failed to Load"></img>
            </div>
            </div>
        );
    }
}
export {Productframe};