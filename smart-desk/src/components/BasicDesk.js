import React from "react"; 
import event_img from "../assets/images/both-closed.jpeg";
import event_img_2 from "../assets/images/no-hood.jpeg"
import event_img_3 from "../assets/images/full-desk.jpeg"

function BasicDesk() {
    return (
        <>
        <div className = "desk-info">
            <br></br>
            <h3><u>Desk Design Information</u></h3> <br></br>
            <img src = {event_img} alt = "plain desk" />
            <p className = "support"> This is the top view of the desk. The grey part on top is the slit where you can put in your cables for a clean finish. The two handles will be described later. </p>
            <br></br><br></br><img src = {event_img_2} alt = "full-desk-no-hood" className = "fullt"/>
            <p className = "support">This is the whole desk. There are wheels at the bottom to move the desk and a lock is available to stop it in a particular place. This will be remote controlled.  </p>
            <br></br><br></br><img src = {event_img_3} alt = "full-desk-yes-hood" className = "fullt"/>
            <p className = "support">I am adding a removable hood on top to allow laptop/desktop screen space. This helps the user have extra space to work with pen/paper and have extra space for a screen. This will also be remote controlled and stored under the desk until needed. </p> 
            <br></br><hr class="rounded"/><br></br>
        </div>
        </>
    )
}

export default BasicDesk;
