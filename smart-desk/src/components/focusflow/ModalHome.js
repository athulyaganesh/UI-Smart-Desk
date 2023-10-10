import React from "react";
import "../../assets/styles/modal.css";

export default class ModalHome extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="modal">
        <div className="content">{this.props.children}</div>  <br></br>
        <div className="actions">
        <button className="fancy-button" onClick={this.onClose}>
            Close
        </button>
  </div>
</div>
      </div>
    );
  }
}
