import React, { Component } from 'react';
import '../../../App.css';
import { Row, Col } from '../../../UI/ExampleStyledComponent'

class Multichoice extends Component{
    constructor(props){
        super()
    }
    render(){
        console.log("this.props.myitems: ",this.props.myitems)
        console.log("typeof this.props.myitems: ",typeof this.props.myitems)
        return (
            <div>
                { this.props.myitems.sentences.map((el, key) => {
                    
                    return(
                        <Row key={ key } className="rowclass">
                            <Col>
                                <span>{ el }</span>
                                    {this.props.value[key].map((el, i) => {
                                        return(
                                            <div key={ i }>
                                                <input type="radio" 
                                                    key={ i }
                                                    name={ key }
                                                    value={ el }
                                                    onChange={ this.props.onChange }
                                               />
                                                <label 
                                                    htmlFor={ el }
                                                >
                                                    { el }
                                                </label>
                                            </div>                                                                                      
                                        ) 
                                    })}                                 
                            </Col>
                            <Col 
                                size={1} 
                                className="colclass"
                                ref={ this.props.refarray[key] }
                            />
                                                  
                            
                        </Row>
                    )
                })}
            </div>
        )
    }
    
}
export default Multichoice;
