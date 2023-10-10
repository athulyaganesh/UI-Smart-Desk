import React, { Component } from 'react';

class Adjust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightInches: 29, // Default height in inches
      angleDegrees: 0, // Default angle in degrees
      customHeight: '', // User input for custom height
      customAngle: '', // User input for custom angle
    };
  }

  handleHeightChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 25 && newValue <= 99) {
      this.setState({ heightInches: newValue });
    }
  };

  handleAngleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 25) {
      this.setState({ angleDegrees: newValue });
    }
  };

  handleCustomHeightChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 25 && newValue <= 99) {
      this.setState({ customHeight: newValue });
    } else {
      this.setState({ customHeight: '' }); // Clear invalid input
    }
  };

  handleCustomAngleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 25) {
      this.setState({ customAngle: newValue });
    } else {
      this.setState({ customAngle: '' }); // Clear invalid input
    }
  };

  resetToDefaultSitting = () => {
    this.setState({
      heightInches: 30, // Default sitting height in inches
      angleDegrees: 0, // Default angle in degrees
      customHeight: '', // Clear custom height input
      customAngle: '', // Clear custom angle input
    });
  };

  resetToDefaultStanding = () => {
    this.setState({
      heightInches: 60, // Default standing height in inches
      angleDegrees: 12, // Default angle in degrees
      customHeight: '', // Clear custom height input
      customAngle: '', // Clear custom angle input
    });
  };

  render() {
    const { heightInches, angleDegrees, customHeight, customAngle } = this.state;

    return (
      <div className="adjust-container">
        <h2>Adjust Desk</h2>

        <div className="adjust-inputs">
          <label>
            Height (in inches):
            <input
              type="number"
              value={customHeight !== '' ? customHeight : heightInches}
              min={25}
              max={99}
              onChange={this.handleCustomHeightChange}
            />
          </label>

          <label>
           <br></br>Angle (in degrees):
            <input
              type="number"
              value={customAngle !== '' ? customAngle : angleDegrees}
              min={0}
              max={25}
              onChange={this.handleCustomAngleChange}
            />
          </label>
        </div>

        <div className="adjust-actions">
          <button className = "fancy-button-2" onClick={this.resetToDefaultSitting}>Reset to Default Sitting</button>
          <button className = "fancy-button-2" onClick={this.resetToDefaultStanding}>Reset to Default Standing</button>
        </div>

        <div className="adjust-summary">
          <p>Current Height: {customHeight !== '' ? customHeight : heightInches} inches</p>
          <p>Current Angle: {customAngle !== '' ? customAngle : angleDegrees} degrees</p>
        </div>
      </div>
    );
  }
}

export default Adjust;



