import React, { Component } from 'react';
import './PGddl.css';
import '../../../App.css';
import { Row, Col } from '../../../UI/ExampleStyledComponent'
class PGddl extends Component{
    constructor(props){
        super(props)
        this.exObj = {}
        console.log("[Constructor]")
        
    }
    componentDidMount(){
        console.log("_______________mounted_______________")
        //this.exObj = this.props.myitems
        //console.log("[pgDDL compdidmount] this.props: ",this.props)
    }
    componentWillMount(){
        console.log("[Comp will mount]")
    }
   
    render(){  
            
        return (
           
            <div>
                {"pgddl rendered"}
                {console.log("this.props.myitems.sentences: ", this.props.myitems[0].sentences)}
                
                {/*console.log("[pgDDL]this.props.myitemsj: ",this.props.myitems[0].sentences)*/}
                {this.props.myitems[0].sentences.map((el, key)=>{
                    el = el.toString().split("*")
                    return(                    
                        <Row key={key} className="rowclass">
                            <Col>
                                <span>{el[0]}</span>
                                <select className="custom-select" name={ key } onChange={this.props.onChange}>
                                    <option>----select----</option>
                                    {console.log("[pgDDL] typeof this.props.myitems[0].answers: ", this.props.myitems[0].answers[0])}
                                    {this.props.myitems[0].answers[0].map((el, i) => {
                                            return(
                                                <option key={i}>{el}</option>
                                                ) 
                                    })}

                                </select>
                                <span>{el[1]}</span>
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


export default PGddl;
{/*<Row key={key} className="rowclass">
                            <Col>
                                <span>{el[0]}</span>
                                <select className="custom-select" name={ key } onChange={this.props.onChange}>
                                    {this.props.value[0].map((el, i) => {
                                        return(
                                                <option key={i}>{el}</option>
                                                ) 
                                    })}  
                                </select>
                                <span>{el[1]}</span>
                            </Col>
                            <Col 
                                size={1} 
                                className="colclass"
                                ref={ this.props.refarray[key] }
                            />
                                                  
                            
                                </Row>*/}