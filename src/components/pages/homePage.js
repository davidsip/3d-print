import React, { Component } from 'react';
import { db } from '../../firebase/index';
import withAuthorization from '../../withAuthorization';

import axios from 'axios';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      //selectedFile: null
      user: {}
    };
  }

  componentDidMount() {
      db.onceGetUsers().then(snapshot =>
        this.setState(() => ({ user: snapshot.val() })) 
      );
  }

  /*state = {
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
  */
  
  render() {
    const{ user } = this.state;
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

          {/*<input type="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler}>Upload</button>
          */}

          { !!user && <UserNam user={user} /> }
      </div>

    );

  }

}

const UserNam = ({ user }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
    
    {Object.keys(user).map(key =>
      <div key={key}>{user[key].username}</div>
    )} 
  </div>

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(Homepage);
