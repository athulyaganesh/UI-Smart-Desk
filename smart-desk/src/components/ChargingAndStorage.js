import React, { Component } from "react"; 
import img1 from "../assets/images/both-open-angle.jpeg";
import reg_img from "../assets/images/both-closed.jpeg";

class ChargingAndStorage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentImage: reg_img // Initial image
      };
    }
  
    handleButtonClick = () => {
      // Toggle between two images
      this.setState((prevState) => ({
        currentImage: prevState.currentImage === img1 ? reg_img : img1,
      }));
    };

    render() {
        return (
        <>
          <div className = "ChargingAndStorage">
            <h3> <u>Wireless Charging and Storage </u></h3> <br></br> <br></br>
            <img src={this.state.currentImage} alt="Table" align = "center" /><br></br> <br></br>
            {<button className = "gray-button"  onClick={this.handleButtonClick}>Change Table</button>} <br></br>
          </div> <br></br>
          <hr class="rounded"/><br></br>
        </>
        );
      }
    }

    
    export default ChargingAndStorage;