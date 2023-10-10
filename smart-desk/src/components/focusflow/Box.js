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
        <h3><u>Focus Flow Interactive Interface</u></h3>
       <br></br> <p>This will show us the interactive layout of Focus Flow, a productivity enhancement application that is placed on the embedded adjustable screen in the desk. </p>
        <br></br>
      </div>
      <div className="center">
        <div className="topnav">
        <p>Welcome, John Doe!</p>
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
          <img src={pic} alt="wave" />
        </div>
        <div className="botnav">
          <IconList />
        </div>
      </div>
      <div>
        <br></br> <hr className="rounded" />
        <br></br>
      </div>
    </>
  );
}
}

export default Box;

