import React, { Component } from 'react';
import './Modal.css';
import TextHiderButtons from '../../Exports/TextHider/TextHiderButtons'
class Modal extends Component {
    constructor(props){
        super(props)
    }
    state = { spanWordsVal: "1",
              spanTimeVal: "100",
              text:"",
              textArray:[],
              refArray:[] }
    onInputWords = (e) => {
        console.log("e.target.value: ",e.target.value)
        this.setState({spanWordsVal:e.target.value})
    }
    onInputTime = (e) => {
        this.setState({spanTimeVal:e.target.value})
    }
    componentDidMount(){
        
    }
    render(){
        return(
            this.props.show ?
                <div 
                    className="Modal"
                >
                    <div className="slidecontainer">
                        <p>Words:</p>
                        <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            defaultValue="1" id="myWordRange"
                            onInput={ this.onInputWords } 
                        />
                        <span>
                            {this.state.spanWordsVal}
                        </span>
                        <p>Time:</p>
                        <span>faster</span><input 
                            type="range" 
                            min="100" 
                            max="5000" 
                            defaultValue="100" id="myTimeRange"
                            onInput={ this.onInputTime } 
                        />
                        <span>
                            {this.state.spanTimeVal}
                        </span>
                        <span>
                            slower
                        </span>
                        <br/>
                        
                        
                       {/* <button 
                            type="submit"
                            onClick={this.props.startStopwatch}
                            >
                                Go!
                        </button>
                        <button 
                            type="submit"
                            onClick={this.props.modalClosed}
                            >
                                Not interested
                        </button>*/}
                        <TextHiderButtons
                            text={this.props.text}
                            textArray={this.props.textArray}
                            refArray={this.props.refArray}
                            setNumWords={this.state.spanWordsVal}
                            setInterval={this.state.spanTimeVal}
                            startWatch={this.props.startStopwatch}
                            ignore={this.props.ignore}
                            childKey={this.props.childKey}
                        />
                </div>
            </div>           
            : null   
        )
    }
}

export default Modal;