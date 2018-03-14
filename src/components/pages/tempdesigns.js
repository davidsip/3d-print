import React, { Component } from 'react';

class TempDesigns extends Component {

  render() {
    return (
      <div className="container-fluid-large">

      <h3>
      View Designs
      </h3>
        <div className="container-fluid-temp">

          <div className = "content-temp">
              <div className = "text-temp">
                  <p>
                  3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
                  emerging global 3D printing market. We want to encourage surf board fin production
                  to empower surfers and local communities.
                  </p>
              </div>
              <div class ="wrap-temp">
              <div class="img-temp">
                  <img src={require('./1.jpg')} alt=""/>
              </div>
              </div>
          </div>
        </div>
        <div className="container-fluid-temp-alt">

          <div className = "content-temp">
              <div className = "text-temp">
                  <p>
                  3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
                  emerging global 3D printing market. We want to encourage surf board fin production
                  to empower surfers and local communities.
                  </p>
              </div>
              <div class ="wrap-temp">
              <div class="img-temp">
                  <img src={require('./2.jpg')} alt=""/>
              </div>
              </div>
          </div>
        </div>
        <div className="container-fluid-temp">

          <div className = "content-temp">
              <div className = "text-temp">
                  <p>
                  3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
                  emerging global 3D printing market. We want to encourage surf board fin production
                  to empower surfers and local communities.
                  </p>
              </div>
              <div class ="wrap-temp">
              <div class="img-temp">
                  <img src={require('./3.jpg')} alt=""/>
              </div>
              </div>
          </div>
        </div>

        <div className="container-fluid-temp-alt">

          <div className = "content-temp">
              <div className = "text-temp">
                  <p>
                  3D Print hosts a platform that can reward designers, makers, and buyers for participating in the
                  emerging global 3D printing market. We want to encourage surf board fin production
                  to empower surfers and local communities.
                  </p>
              </div>
              <div class ="wrap-temp">
              <div class="img-temp">
                  <img src={require('./4.jpg')} alt=""/>
              </div>
              </div>
          </div>
        </div>


      </div>
    );

  }

}

export default TempDesigns;
