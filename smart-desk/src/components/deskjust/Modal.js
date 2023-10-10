import React from "react";
import "../../assets/styles/deskmodal.css";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-overlay-1">
        <div className="modal-1">
        <div className="content-1">{this.props.children}</div>  <br></br>
        <div className="actions-1">
        <button className="fancy-button-1" onClick={this.onClose}>
            Close
        </button>
  </div>
</div>
      </div>
    );
  }
}
