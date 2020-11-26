import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from '../../components/ExampleStyledComponent';
import Text from '../../components/Text';
import Key from '../../components/Key'


class TextHider extends Component {
    constructor(props){
       super(props)
       this.set = {}

    }
   
    
    render(){
        return(
            <div>

                <Col>
                    <h3>Text Hider</h3>
                    
                    {/*<Text
                      text={ this.props.text }
                      textArray={ this.props.textArray }
                      refArray={ this.props.refArray }
                      className={ this.props.className }
                      onClick={ this.onWordClickHandler }
                      
                    />*/}
                    
                   
                </Col>
            </div>
        )
    }
}


export default TextHider;
