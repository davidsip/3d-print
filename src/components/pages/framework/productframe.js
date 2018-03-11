//inbetween imports from database and button needs an onclick
import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
    
    const INITIAL_STATE = {
    productname: '',
    designer: '',
    description: '',
    price: '',
    picture: null,
    error: null,
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
        error,
      } = this.state;
        return(
            <div classname="designlayout">
            <p>Product Name:</p> 
            <div classname="content">
                <input
                    value ={productname}
                    type = "text"
                /> 
            </div>
            <p>Designer:</p><div classname="content">
                <input
                    value ={designer}
                    type = "text"
                /> 
            </div>
            <p>Description:</p><div classname="content">
                <input
                    value ={description}
                    type = "text"
                /> 
            </div>
            <p>Price: $</p><div classname="content">
                <input
                    value ={price}
                    type = "text"
                /> 
            </div>
            <button type="button">Price</button>
            <img src = {picture} alt="Image"></img>
            </div>
        );
    }
}
export default Productframe;