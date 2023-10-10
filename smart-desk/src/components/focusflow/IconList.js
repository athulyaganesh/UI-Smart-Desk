import React, { Component } from 'react';
import { BsHouseDoorFill, BsFillCalendarEventFill, BsCardChecklist, BsFillPeopleFill, BsFillMoonFill, BsLink, BsFillXSquareFill } from 'react-icons/bs';
import ModalHome from './ModalHome'; // Import the ModalHome component from your project (make sure to provide the correct path)
import PropTypes from "prop-types";
import TaskList from './TaskList'; 
import SliderExample from "./DND"; 
import Calendar from './Calendar';
import ImageGallery from "./Integrate"; 

class IconList extends Component {
    state = {
      showHomeModal: false,
      showCalendarModal: false,
      showTaskModal: false, 
      showUserModal: false,
      showDNDModal: false, 
      showIntegrateModal: false, 
      showExitModal: false
    };
  
    showModal = (modalName, e) => {
      e.preventDefault(); // Prevent the default behavior of anchor links
      this.setState({
        [modalName]: true,
      });
    };
  
    closeModal = (modalName) => {
      this.setState({
        [modalName]: false,
      });
    };
  
  render() {
    return (
      <div className="icon-list">

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showHomeModal', e)}><BsHouseDoorFill/></a>
          <span className="icon-description">HOME</span>
        </div>

        <div className="icon">
          <a href="#" onClick={(e) => this.showModal('showCalendarModal', e)}><BsFillCalendarEventFill/></a>
          <span className="icon-description">CALENDAR</span>
        </div>

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showTaskModal', e)}><BsCardChecklist/></a>
          <span className="icon-description">TASKS</span>
        </div>

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showUserModal', e)}><BsFillPeopleFill/></a>
          <span className="icon-description">USER</span>
        </div>

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showDNDModal', e)}><BsFillMoonFill /></a>
          <span className="icon-description">SETTINGS</span>
        </div>

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showIntegrateModal', e)}><BsLink /></a>
          <span className="icon-description">INTEGRATE</span>
        </div>

        <div className="icon">
        <a href="#" onClick={(e) => this.showModal('showExitModal', e)}><BsFillXSquareFill /></a>
          <span className="icon-description">EXIT</span>
        </div>

        <ModalHome onClose={() => this.closeModal('showHomeModal')} show={this.state.showHomeModal}>
          <h2>This is the Home Tab.</h2>
          <p>Current Tab</p>
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showCalendarModal')} show={this.state.showCalendarModal}>
          {/* <div className = "calendar">
              <h2>Calendar</h2>
              <h1>August 2023</h1>
              <button className="fancy-button">Previous</button> <button className="fancy-button">    Next    </button> <br></br>
              <label htmlFor="text-input">Enter Month:</label>
              <input type="text" id="text-input" value={this.state.inputValue} onChange={this.handleInputChange}/>
              <label htmlFor="text-input">Enter Year:</label>
              <input type="text" id="text-input" value={this.state.inputValue2} onChange={this.handleInputChange2}/>
              <button className="fancy-button">Find</button> <br></br><br></br>
              <img className = "calendar" src = {calendar} alt = "calendar"/>
          </div>  */}
          <Calendar /> 
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showTaskModal')} show={this.state.showTaskModal}>
          <div className = "task-list">
            <TaskList />
          </div>
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showUserModal')} show={this.state.showUserModal}>
        <div className = "user-modal">
          <h2>Usage Statistics</h2> 
          <div>
          <h3>Current User: Athulya Ganesh </h3>
          <br></br>
          <h3><u>Statistics</u></h3>
          <h4>Screen Time: </h4>
          <li>TODAY: 4 hr 40 min</li>
          <li>THIS WEEK: 60 hr 30 min</li> <br></br>
          <h4>Most Used Websites/Apps Today: </h4>
          <li>Notion: 2 hrs</li>
          <li>Teams: 1 hr 30 min</li>
          <li>FocusFlow: 30 min</li>
          <br></br>
          <h4>Your usage has gone up by 30% since last week where you had 20 hrs of screen time.</h4>
          </div>
        </div>
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showDNDModal')} show={this.state.showDNDModal}>
          <div className = "dnd">
            <SliderExample /> 
          </div>
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showIntegrateModal')} show={this.state.showIntegrateModal}>
          <h2>External App Integrations</h2>
          <ImageGallery />
        </ModalHome>

        <ModalHome onClose={() => this.closeModal('showExitModal')} show={this.state.showExitModal}>
          <h2>Exit</h2>
          Bye-Bye!
        </ModalHome>

      </div>
    );
  }
}

export default IconList;

ModalHome.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};