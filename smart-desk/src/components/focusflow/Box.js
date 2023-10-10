// Box.js
import React from 'react';
import { Component } from 'react';
import '../../assets/styles/focusflow.css';
import pic from '../../assets/images/waves.jpeg';
import IconList from '../focusflow/IconList';


class Box extends Component {
 
  render() {
  return (
    <>
      <div>
        <h3 className = "support"><u>Focus Flow Interactive Interface</u></h3>
        <br></br>
      </div>
      <div className="center">
        <div className="topnav">
        <p>Welcome, Athulya!</p>
          <p>
            <b>
              <u>Date: </u>
            </b>
            08/08/2003
          </p>
          <p>
            <b>
              <u>Time: </u>
            </b>
            4:00 PM
          </p>
        </div>
        <div className="title-and-body">
          <p>Focus Flow</p>
          <img className = "wave" src={pic} alt="wave" />
        </div>
        <div className="botnav">
          <IconList />
        </div>
      </div>
      <br></br> <p className = "support">This will show us the interactive layout of Focus Flow, a productivity enhancement application that is placed on the embedded adjustable screen in the desk. </p>
      <div>
        <br></br> <hr className="rounded" />
        <br></br>
      </div>
    </>
  );
}
}

export default Box;

