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
          <div className = "text">
            <p>
            3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
            emerging global 3D printing market. We want to encourage surf board fin production
            to empower surfers and local communities.
            </p>
            </div>

            
          <div class ="wrap">

              <input type="radio" class="rnav black" id="slide_1" name="coins"/>
              <input type="radio" class="rnav red" id="slide_2" name="coins"/>
              <input type="radio" class="rnav yellow" id="slide_3" name="coins"/>

              <div class="boxes">
                  <div class="box black">
                      <img src={require('./world2.png')} alt=""/>
                  </div>
                  <div class="box red">
                      <img src={require('./bb.jpg')} alt=""/>
                  </div>
                  <div class="box yellow">
                      <img src={require('./aa.jpg')} alt=""/>
                  </div>
              </div>

              <div class="labels">
                  <label for="slide_1" class="s-index b-label"></label>
                  <label for="slide_2" class="s-index r-label"></label>
                  <label for="slide_3" class="s-index y-label"></label>
              </div>
          </div>
    
        </div>


          

          <input type="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler}>Upload</button>
      </div>

    );

  }

}

export default Homepage;
