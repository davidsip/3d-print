import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

      <h1>
      Welcome to 3D Print!
      </h1>
        <div className = "content">
          <div className = "picture">
            <img src={require('./world2.png')} alt = "graph"/>
          </div>
          <div className = "text">
            <p>
            3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
            emerging global 3D printing market. We want to encourage surf board fin production
            to empower surfers and local communities.
            </p>
          </div>
        </div>
        //new page here************************************************8
        <div className = "content">
          <div className = "picture">
            <img src={require('./world2.png')} alt = "graph"/>
          </div>
          <div className = "text">
            <p>
            3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
            emerging global 3D printing market. We want to encourage surf board fin production
            to empower surfers and local communities.
            </p>
          </div>
        </div>


      </div>

    );
  }
}

export default Homepage;
