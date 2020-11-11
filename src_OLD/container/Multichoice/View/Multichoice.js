import React, { Component } from 'react';
import '../../../App.css';
//import { Row, Col } from '../../../UI/ExampleStyledComponent'

class Multichoice extends Component{
    constructor(props){
        super(props)
        console.log("[Multichoice] constructor runs first: ",this.props.questions[0])   
    }
   // static getDerivedStateFromProps(pros,state){
    //    console.log("[Multichoice] getDerivedStateFromProps runs second: ")
    //    return state
    //}
    shouldComponentUpdate(nextProps,nextState){
        console.log("[Multichoice] shouldComponentUpdate: ",this.props.questions)
        return true
    }
    getSnapshotBeforeUpdate(nextProps, prevState){
        console.log("[Multichoice] getSnapshotBeforeUpdate: ",this.props.questions)
        return nextProps
    }
    componentDidUpdate(){
        console.log("[Multichoice] componentDidUpdate: ",this.props.questions)
    }
    componentDidMount(){ 
        console.log("[Multichoice] componentDidMount runs last: ",this.props.questions.length )
    }
    
    render(){
        console.log("[Multichoice] render runs third: ",this.props.questions.length)

        return (
            
            <div>
                {console.log("[Multichoice] value returned by render(): ",this.props.questions.length)}
            {/* {this.props.questions.map((el,i)=>{
                 return(
                    <li key={ i }>
                     <input type="radio" 
                                                    key={ i }
                                                    name={ i }
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
             })
            }*/}
            </div>
        )
    }
    
}
export default Multichoice;
/*
{this.props.answers[0].map((el, i) => {
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
*/
/*
 { this.props.sentences.map((el, key) => {
                    
                    return(
                        <Row key={ key } className="rowclass">
                            <Col>
                                <span>{ el }</span>
                                    <ol>
                                    {this.props.answers[0].map((el, i) => {
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
                                    </ol>                                
                            </Col>
                            <Col 
                                size={1} 
                                className="colclass"
                                //ref={ this.props.refarray[key] }
                            />
                                                  
                            
                        </Row>
                    )
                })
                }
*/
/*
{ this.props.sentences.map((el, key) => {
                    
                    return(
                        <Row key={ key } className="rowclass">
                            <Col>
                                <span>{ el }</span>
                                )
                                
*/
