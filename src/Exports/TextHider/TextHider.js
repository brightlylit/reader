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
    state = {
        refArray:[],
        ignore:[],
        childKey:[],
        text:[]
    }
    componentDidMount(){
        this.setState({
            refArray:this.props.refArray,
            ignore:this.props.ignore,
            text:this.props.text           
        })
        console.log("[TextHider] this.textArray: ", this.props.textArray)

    }
    
      
      onWordClickHandler = (e) =>{  
        
        //console.log("this.state.refArray: ",this.props.refArray) 
        //console.log("this.state.ignore: ",this.props.ignore) 
        console.log("this.state.childKey: ",this.props.childKey) 
        //console.log("this.state.text: ",this.props.text) 
        //console.log("this.state.childKey: "+this.props.childKey) 
        //console.log("this.state.refArray[e.target.id].current.innerHTML: ",this.state.refArray[e.target.id].current.innerHTML)
        //console.log("e.target.id: "+e.target.id)
        //console.log("this.props.refArray[e.target.id].current: ",this.props.refArray[e.target.id].current)
        for(var x = 0; x < this.props.childKey.length; x++){   
          
          if(this.props.refArray[e.target.id].current.innerHTML === this.props.refArray[this.props.childKey[x]].current.innerHTML){
            
            this.props.refArray[e.target.id].current.classList.add('ignore') 
            this.ignoreCounter++;
            if(this.ignoreCounter === 5){
              this.setState({autostop:"true"})
            }
          }
        }
        
      }
    
    render(){
        return(
            <div>

                <Col>
                    <h3>Text here</h3>
                    
                    <Text
                    text={ this.props.text }
                    textArray={ this.props.textArray }
                    refArray={ this.props.refArray }
                    className={ "unblanked" }
                    onClick={ this.onWordClickHandler }
                    />
                    {/*
                    className={ "unblanked" }
                    onClick={ this.onWordClickHandler }
                    refArray={ this.state.refArray }
        />*/}
                    <hr/>
                    Key here
                    {/*<Key
                      textarray={ this.props.text}
                      answers={ this.props.childKey }
                    />*/}
                </Col>
            </div>
        )
    }
}


export default TextHider;
