import React, { Component } from 'react';
import axios from 'axios';

class Homepage extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event =>{
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('gs://printer-1c171.appspot.com', fd);
  }
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

          <input type="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler}>Upload</button>
      </div>

    );

  }

}

export default Homepage;
