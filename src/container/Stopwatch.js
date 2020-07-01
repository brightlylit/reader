import React, { Component } from 'react';

class Stopwatch extends Component{
   constructor(){
       super()
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.textContent = ""
        this.t = {}
   }
   state = {
       textContent:""
   }
        
        
    
    componentDidMount(){
        const add = () => {
            this.seconds++;
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes++;
                if (this.minutes >= 60) {
                    this.minutes = 0;
                    this.hours++;
                }
            }
            this.textContent = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
            this.setState({textContent:this.textContent})
            timer();
            if( this.props.autostop === "true" ){
                console.log("stopping timer")
                clearTimeout(this.t)
            }

        }
        const timer = () => {
            this.t = setTimeout(add, 1000);
        }
        add()
    }
    stopStopwatch = () => {
        console.log("stopped")
        clearTimeout(this.t)
    }
    render(){
        return(
            <div>
                <span>
                    { this.state.textContent }
                </span>
                <button
                onClick={ this.stopStopwatch }
                autostop={ this.props.autostop }
                >Stop
                </button>
            </div>
                
                
            
        )
    }
}
export default Stopwatch;



/*var stopwatch = document.getElementById('stopwatch'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    stopwatch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}*/
//timer();


/* Start button */
//start.onclick = timer;

/* Stop button */
//stop.onclick = function() {
   // clearTimeout(t);
//}

/* Clear button */
//clear.onclick = function() {
   // stopwatch.textContent = "00:00:00";
   // seconds = 0; minutes = 0; hours = 0;
//}