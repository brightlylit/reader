import React, {Component} from'react';
import './TextInput.css';
    class TextInput extends Component {
        render(){
            return(
                <div>
                    {this.props.myitems.sentences.map((el, i) => {
                        el = el.toString().split("*")
                        return (
                            <div key={i}>
                                <span>{el[0]}</span>
                                    <input type="text" className="text-input"
                                        onKeyDown = { this.props.onKeyDown }//this handles backspace key press
                                        count = { this.props.counter }
                                        myitems = { this.props.myitems }
                                        name = { i }  
                                    />
                                <span>{el[1]}</span>
                                <div
                                ref={ this.props.refarray[i]}
                                ></div>
                                <button type="submit" onClick={ this.props.onClick} id={ i } visible={ this.props.visible }>check</button>
                            </div>
                        )
                    })}     
                </div> 
            );
        }
    }
    

export default TextInput;