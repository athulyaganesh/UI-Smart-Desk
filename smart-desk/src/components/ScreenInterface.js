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
            <h3><u>Screen Interface:</u> </h3> <br></br> <br></br>
            <p>The screen on the desk has the following interface that allows you to resize the screen and view apps like so</p>
            <img className = "fullt2" src = {img} alt = "Desk Interface"/>  <br></br>
            <h3><u>Interactive Version: </u></h3> <br></br> <br></br>
            <MoveableInterface /><br></br>
        </div> <br></br>
        <hr class="rounded"/>
        <div className = "remote-controller" align = "center">
            <br></br>
            <h3><u>Remote Control that comes with the Desk</u></h3><br></br>
            <p>To control the desks capabilities for RGB lights, movement as it has wheels, hood control as well as height control, I have proposed a remote control that is compact and comes with the desk.</p>
            <br></br><RemoteControl />
            <br></br><p>This is where it resides on the interface although it is detachable.</p>
            <img src = {img2} alt = "none"></img>
        </div>
        <br></br><hr class="rounded"/><br></br>
        </> 
    )
}

export default ScreenInterface; 