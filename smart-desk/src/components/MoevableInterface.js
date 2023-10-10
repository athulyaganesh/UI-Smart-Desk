import React, { Component } from 'react';
import '../assets/styles/index.css'; // Import your CSS file for styling

class MoveableInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 600, // Initial width
      height: 300, // Initial height
      isResizing: false,
      buttonText: '', // Initialize the buttonText state
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseDown(e) {
    this.setState({
      isResizing: true,
      originalX: e.clientX,
      originalY: e.clientY,
    });

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp() {
    this.setState({ isResizing: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    if (!this.state.isResizing) return;

    const deltaX = e.clientX - this.state.originalX;
    const deltaY = e.clientY - this.state.originalY;

    this.setState((prevState) => ({
      width: prevState.width + deltaX,
      height: prevState.height + deltaY,
      originalX: e.clientX,
      originalY: e.clientY,
    }));
  }

  handleButtonClick = (buttonName) => {
    this.setState({ buttonText: `Opening App: ${buttonName}` });
  };

  render() {
    const { width, height, buttonText } = this.state;
    return (
      <div className="resizable-screen" style={{ width: `${width}px`, height: `${height}px` }}>
        <div className="buttons">
          <button
            className="styled-button"
            onClick={() => this.handleButtonClick('Focus Flow')}
          >
            Focus Flow
          </button>
          <button
            className="styled-button"
            onClick={() => this.handleButtonClick('Desk-Just')}
          >
            Desk-Just
          </button>
          <button
            className="styled-button"
            onClick={() => this.handleButtonClick('Take Notes')}
          >
            Take Notes
          </button>
        </div>
        <div className="resize-handle" onMouseDown={this.handleMouseDown}></div>
        <div className="screen-content">{buttonText}</div>
      </div>
    );
  }
}

export default MoveableInterface;
