
import React from 'react';
import { Component } from 'react';
import '../../assets/styles/deskjust.css';
import pic from '../../assets/images/full-desk.jpeg'
import DeskIcon from "./DeskIcon"; 

class Desk extends Component {
 
  render() {
  return (
    <>
      <div>
        <h3><u>Desk-Just</u></h3><br></br>
        <p>This will show us the interactive layout of DeskJust, an application that is placed on the embedded adjustable screen in the desk to allow the user to adjust the height and angle of the table. </p>
        <br></br>
      </div>
      <div className="center-1">
        <div className="topnav-1">
            Welcome! 
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
        <div className="title-and-body-1">
            Desk-Just
          <img className = "img-1" src={pic} alt="desk"/>
        </div>
        <div className="botnav-1">
            <DeskIcon /> 
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

export default Desk;

