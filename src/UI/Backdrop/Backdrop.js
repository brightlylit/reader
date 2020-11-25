import React, { Component } from 'react';
import './Backdrop.css';
class Backdrop extends Component {
    constructor(props){
        super(props)
    }
    state = { spanWordsVal: "10",
              spanTimeVal: "20" }
    onInputWords = (e) => {
        console.log("e.target.value: ",e.target.value)
        //this.theval = e.target.value
        this.setState({spanWordsVal:e.target.value})
    }
    onInputTime = (e) => {
        this.setState({spanTimeVal:e.target.value})
    }
    render(){
        return(
            <div>
                <div className="slidecontainer">
                    <input 
                        type="range" 
                        min="1" 
                        max="100" 
                        defaultValue="10" id="myWordRange"
                        onInput={ this.onInputWords } 
                    />
                    <input 
                        type="range" 
                        min="1" 
                        max="100" 
                        defaultValue="10" id="myTimeRange"
                        onInput={ this.onInputTime } 
                    />
                    <span>Words:</span>
                    <span>
                        {this.state.spanWordsVal}
                    </span>
                    <br/>
                    <span>Time:</span>
                    <span>
                        {this.state.spanTimeVal}
                    </span>

                </div>  
            </div>

        )
    }
        
}
export default Backdrop