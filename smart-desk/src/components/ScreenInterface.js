import React from "react"; 
import img from "../assets/images/close-desk-interface.jpeg"; 
import img2 from "../assets/images/remote.jpg"; 
import MoveableInterface from "./MoevableInterface"; 
import RemoteControl from "./RemoteControl";

function ScreenInterface() 
{
    return (
        <>
        <div className = "screen-interface" align = "center">
            <h3 className = "support"><u>Screen Interface:</u> </h3> <br></br> 
            <img className = "fullt2" src = {img} alt = "Desk Interface"/>  <br></br>
            <p className = "support">The screen on the desk has the following interface that allows you to resize the screen and view apps like so</p><br></br>
            <h3 className = "support"><u>Interactive Version: </u></h3> <br></br> <br></br>
            <MoveableInterface /><br></br>
        </div> <br></br>
        <hr class="rounded"/>
        <div className = "remote-controller" align = "center">
            <br></br>
            <h3 className = "support"><u>Remote Control that comes with the Desk</u></h3><br></br>
            <RemoteControl />
            <br></br><p className = "support">To control the desks capabilities for RGB lights, movement as it has wheels, hood control as well as height control, I have proposed a remote control that is compact and comes with the desk.</p>
            <img className = "fullt2" src = {img2} alt = "none"></img>
            <br></br><p className = "support">This is where it resides on the interface although it is detachable.</p>
        </div>
        <br></br><hr class="rounded"/><br></br>
        </> 
    )
}

export default ScreenInterface; 