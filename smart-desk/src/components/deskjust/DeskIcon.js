import React, { Component } from 'react';
import { BsMagic, BsFillPeopleFill, BsFillXSquareFill } from 'react-icons/bs';
import Modal from './Modal'; 
import PropTypes from "prop-types";
import "../../assets/styles/deskjust.css"
import PeopleGrid from "./DeskUsers"; 
import Adjust from "./DeskAdjust"; 

class DeskIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMagicModal: false, 
      showUsersModal: false,
      showExitingModal: false 
    };
  }
  
  showModal_1 = (modalName, e) => {
    e.preventDefault(); // Prevent the default behavior of anchor links
    this.setState({
      [modalName]: true,
    });
  };
  
  closeModal_1 = (modalName) => {
    this.setState({
      [modalName]: false,
    });
  };
  
  render() {
    return (
      <div className="icon-list-1">

        <div className="icon-1">
        <a href="#" className="icon-1" onClick={(e) => this.showModal_1('showMagicModal', e)}><BsMagic/></a>
          <span className="icon-description-1">ADJUST</span>
        </div>

        <div className="icon-1">
        <a href="#" className="icon-1" onClick={(e) => this.showModal_1('showUsersModal', e)}><BsFillPeopleFill/></a>
          <span className="icon-description-1">USERS</span>
        </div>

        
        <div className="icon-1">
        <a href="#" className="icon-1" onClick={(e) => this.showModal_1('showExitingModal', e)}><BsFillXSquareFill /></a>
          <span className="icon-description-1">EXIT</span>
        </div>

        <Modal onClose={() => this.closeModal_1('showMagicModal')} show={this.state.showMagicModal}>
        <Adjust /> 
          
        </Modal>
        
        <Modal onClose={() => this.closeModal_1('showUsersModal')} show={this.state.showUsersModal}>
          <PeopleGrid />  
        </Modal>

        <Modal onClose={() => this.closeModal_1('showExitingModal')} show={this.state.showExitingModal}>
          <h2>Exit</h2>
          Bye-Bye!
        </Modal>

      </div>
    );
  }
}

export default DeskIcon;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
