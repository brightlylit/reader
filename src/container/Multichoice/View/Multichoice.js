import React, { Component } from 'react';
import '../../../App.css';
import { Row, Col } from '../../../UI/ExampleStyledComponent'

class Multichoice extends Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <div>

                
                { this.props.myitems[0].sentences.map((el, key) => {
                    
                    return(
                        <Row key={ key } className="rowclass">
                            <Col>
                                <span>{ el }</span>
                                    <ul>
                                    {this.props.value[key].map((el, i) => {
                                        return(
                                           
                                                <li key={ i }>
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
                                                </li>                                                                                          
                                        ) 
                                    })}  
                                    </ul>                               
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
