import React from 'react';
import '../../assets/styles/modal.css'; // Import your CSS file

function SliderExample() {
  return (
    <div>
      <h2>Notification Settings</h2><br></br>

      {/* Notifications Slider */}
      <label>Silent Mode:  </label>
      <label class="switch">
      <input type="checkbox"/>
      <span class="slider round"></span>
      </label> 

      {/* DO Not Disturb Slider */}
      <label>   Do Not Disturb:  </label>
      <label class="switch">
      <input type="checkbox"/>
      <span class="slider round"></span>
      </label>

    </div>
  );
}

export default SliderExample;
