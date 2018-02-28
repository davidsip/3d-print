import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

      <h1>
      Welcome to 3D Print!
      </h1>
        <div className = "content">
          <div className="backImage">
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
       class UploadScreen extends Component {
render() {
    return (
     <div className="App">
      <Dropzone onDrop={(files) => this.onDrop(files)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
     </div>
     )
 }
}
        //new page here************************************************8
        <div className = "content">
          <div className="backImage">
            <div className = "picture">
            
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



      </div>

    );
  }
}

export default Homepage;
