import React, { Component } from "react"; 
import img_right from "../assets/images/right-open-angle.jpeg";
import img_straight from "../assets/images/right-open-straight.jpeg";
import img_none from "../assets/images/right-open-none.jpeg"; 


class RightSideVariations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0, // Initial index
      images: [
        img_right,
        img_straight,
        img_none, // Add the URLs of your three images
      ],
    };
  }

  handleButtonClick = () => {
    // Increment the currentImageIndex and loop back to 0 when reaching the end
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
    }));
  };

  render() {
    const currentImage = this.state.images[this.state.currentImageIndex];

    return (
      <div> <br></br>
        <h3> <u>Right Side Table Variations</u> </h3> <br></br>
        <p>The three variations in the design of the right side tablet-charger: </p>
        <img src={currentImage} alt="Current" /> <br></br> <br></br>
        <button  className = "gray-button" onClick={this.handleButtonClick}>See New Variation</button><br></br> <br></br>
        <p> What this means is that the user is either able to wirelessly charge their tablet while it is facing upwards, or can attach the removable stand pieces (that stay either straight or pivot towards user at a 30 degree angle) to charge their tablet upright so they may be able to use it while working. </p>
        <br></br><hr class="rounded"/><br></br>
      </div>
    );
  }
}

export default RightSideVariations;
