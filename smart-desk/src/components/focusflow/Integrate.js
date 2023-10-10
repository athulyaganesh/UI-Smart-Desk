import React, { Component } from 'react';
import teams from "../../assets/images/teams.jpeg"
import notion from "../../assets/images/notion.jpeg"
import cal from "../../assets/images/cal.jpeg"
import SuccessPopup from "./Success"; 

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        teams, notion, cal
      ],
      showSuccessPopup: false, // State to control the visibility of the success popup
    };
  }

  handleImageClick = () => {
    // When an image is clicked, set showSuccessPopup to true to display the popup
    this.setState({ showSuccessPopup: true });

    // You can optionally set a timer to hide the popup after a few seconds
    setTimeout(() => {
      this.setState({ showSuccessPopup: false });
    }, 2000); // Hide the popup after 2 seconds (adjust as needed)
  };

  render() {
    const { images, showSuccessPopup } = this.state;

    return (
      <div className="image-gallery">
        <div className="image-grid">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <a href="#" onClick={(e) => { e.preventDefault(); this.handleImageClick(); }}>
                <img src={image} alt={`Image ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>

        {/* Render the SuccessPopup component based on state */}
        <SuccessPopup show={showSuccessPopup} />
      </div>
    );
  }
}

export default ImageGallery;




