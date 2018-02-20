import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="container-fluid">

      <h1>
      Welcome to the Products Page!
      </h1>

      <p>
          <button type="button" name="Design" width="200" onclick="show()"> More Details</button>
          <img src="/images/Designed1.jpg" alt="Design number 1" height="500" width="500"></img>
      </p>
          <script>
            function show(){
                    
                }
            </script>
      </div>

    );
  }
}

export default Products;
