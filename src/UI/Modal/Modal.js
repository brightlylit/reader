import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => {
    return(
            props.show ?
            <div>
                
                <div 
                    className="Modal"
                    style={{transform:props.show ? 'translateY(0)' : 'translateY(-100vh)'}}
                    >
                    <Backdrop 
                        show={props.show}
                    />
                    
                        
                    
                    <button 
                        type="submit"
                        onClick={props.startStopwatch}
                        >
                            Go!
                    </button>
                    <button 
                        type="submit"
                        onClick={props.modalClosed}
                        >
                            Not interested
                    </button>
                </div>
            </div>
            
            : null
   
    )


}

export default modal;