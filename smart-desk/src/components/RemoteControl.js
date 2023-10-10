import React, { Component } from 'react';

import '../assets/styles/index.css'; // Import your CSS file for styling

class RemoteControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoodEnabled: false,
      deskDirection: '',
      rgbColor: '#FFFFFF',
      deskHeight: 30, // Initial desk height in inches
      isPowerOn: false, // Initial power state
    };
  }

  togglePower = () => {
    this.setState((prevState) => ({
      isPowerOn: !prevState.isPowerOn,
    }));
  };

  toggleHood = () => {
    this.setState((prevState) => ({
      hoodEnabled: !prevState.hoodEnabled,
    }));
  };

  moveDesk = (direction) => {
    this.setState({
      deskDirection: direction,
    });
  };

  handleRGBChange = (event) => {
    this.setState({
      rgbColor: event.target.value,
    });
  };

  handleHeightChange = (event) => {
    const newHeight = parseInt(event.target.value);
    if (!isNaN(newHeight) && newHeight >= 25 && newHeight <= 99) {
      this.setState({
        deskHeight: newHeight,
      });
    }
  };

  render() {
    const { hoodEnabled, deskDirection, rgbColor, deskHeight, isPowerOn } = this.state;

    return (

      <div className="remote-control">
        <h1>AthuDesk</h1>
        <br></br>
        {/* Power Button */}
      <section className="power-control">
        <h3><u>Power Control</u></h3>
        <button onClick={this.togglePower}>
          {isPowerOn ? "Power Off" : "Power On"}
        </button>
        <p>Status: {isPowerOn ? 'On' : 'Off'}</p>
      </section>
      <br></br>
      <hr></hr>
      <br></br>

        {/* Hood Control */}
        <div className="hood-control">
          <h3><u>Hood Control</u></h3>
          <button onClick={this.toggleHood}>
            {hoodEnabled ? 'Disable Hood' : 'Enable Hood'}
          </button>
          <p>Status: {hoodEnabled ? 'Enabled' : 'Disabled'}</p>
        </div>
        <hr></hr>

        {/* Desk Control */}
        <div className="desk-control">
          <br></br><h3><u>Desk Control</u></h3>
          <button onClick={() => this.moveDesk('Up')}>Up</button> <br></br><br></br>
          <button onClick={() => this.moveDesk('Left')}>Left</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          <button onClick={() => this.moveDesk('Right')}>Right</button> <br></br><br></br>
          <button onClick={() => this.moveDesk('Down')}>Down</button>

          <p>Direction: {deskDirection}</p>
        </div> 
        <hr></hr>

        {/* RGB Lights Control */}
        <div className="rgb-control">
          <br></br><h3><u>RGB Lights Control</u></h3>
          <input
            type="color"
            value={rgbColor}
            onChange={this.handleRGBChange}
          />
          <p>Selected Color: {rgbColor}</p>
        </div> 
        <hr></hr>

        {/* Height Control */}
        <div className="height-control">
          <h3><u>Height Control</u></h3>
          <input
            type="number"
            value={deskHeight}
            onChange={this.handleHeightChange}
            min="25"
            max="99"
          />
          <p>Desk Height: {deskHeight} inches</p>
        </div>
        <div className="status-text">{this.state.statusText}</div>
      </div>
    );
  }
}

export default RemoteControl;
