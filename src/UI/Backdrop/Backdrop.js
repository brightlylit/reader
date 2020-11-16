import React from 'react';
import './Backdrop.css';
const backdrop = (props) => (
    <div>
        <div className="Backdrop">
        background 
        </div>
        <div className="slidecontainer">
           <input type="range" min="1" max="100" defaultValue="10" id="myRange" />
           <p>Value:</p><span>x</span>
        </div>  
    </div>
        
)
export default backdrop