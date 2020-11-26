import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, NewCol, InnerCol } from './components/ExampleStyledComponent';
import DataLoader from './Exports/DataLoader';
import ExerciseLoader from './components/ExerciseLoader';
import Text from './components/Text';
import Stopwatch from './container/Stopwatch';
import Key from './components/Key'
import DropDown from './components/DropDown';
import Modal from './UI/Modal/Modal';

class App extends Component{
    constructor(props){
        super(props)
        this.dataloader = new DataLoader();
    }
    state = {
        viewModal:false,
        textOptKeys:[],
        refArray:[],
        showStopWatch:false,
        className:"unblanked",
        text:'',
        textArray:[],
        showExerciseLoader:"false"
    }
    componentDidMount(){
        this.dataloader.getData().then((content) => {//content === eg T1 -> exercises -> 0 -> answers / sentences / type
            let TOK = Object.keys(content)
            this.setState({textOptKeys:TOK, headings:content.headings})
            this.content = content //root node is T1 / T2 etc   
          })  
    }
    showModal = () => {
        this.setState({viewModal:true})
        return this.state.viewModal
    }
    closeModal = () => {
        this.setState({viewModal:false})
        //this.startStopwatch()
        
        return this.state.viewModal
    }
    startStopwatch = () => {
        //this.setState({viewModal:false})
        this.setState({showStopWatch:true, className:"unblanked"})
    }
    
    onChangeHandler = (e) => { 
             
        let keyArray = Object.keys(this.content) // eg T1/T2 etc
        for (var x = 0; x < keyArray.length; x++){
          let y = keyArray[x] //T1 etc
          if(e.target.value === y){ //check selected text name exists
            this.textArray = this.content[y].text.split(" ")//split the content of the text node into an array
            this.answerKey = this.content[y].key
            if(this.answerKey != undefined){
                this.setState({viewModal:true})
                this.setState({className:"unblankedblurry"})
                
            }else{
                this.setState({viewModal:undefined})//undefined removes click handler on text
                this.setState({className:"unblanked"})
            }
            this.refArray = this.textArray.map(()=> React.createRef())
            
            
            this.setState({ 
                          text:this.content[y].text,
                          textArray:this.textArray,
                          refArray:this.refArray, 
                          ignore:this.content[y].ignore, 
                          childKey:this.content[y].key, 
                          exercises: this.content[y].exercises
                          
                        }, this.callTheRefBack) 
                if(!this.content[y].exercises){
                    console.log("this.content[y].exercises: ",this.content[y].exercises)
                    this.setState({showExerciseLoader:"false"}) 
                    
                }else{
                    console.log("this.content[y].exercises: ",this.content[y].exercises)
                    this.setState({showExerciseLoader:"true"}) 
                  
                }
                              
            }
        }
        return this.state
    } 
    callTheRefBack = () => {
        for(let r=0; r < this.state.refArray.length; r++){
            this.state.refArray[r].current.classList.remove("greyed")
        }
    }
    render(){
        return (
            <Grid>
                <Row>
                    top row
                </Row>
                <Row>
                    <Col size={0.125}>
                        
                    </Col>
                        <Col size={1.0}>
                        
                        <DropDown
                            opts={this.state.textOptKeys}
                            onChange={this.onChangeHandler}
                            onMouseDown={this.onClickHandler}
                        />
                        
                        <span>text hider</span>
                   
                        <Text
                            textArray={ this.state.textArray }
                            refArray={ this.state.refArray }
                            className={ this.state.className }
                            onClick={ this.onWordClickHandler }
                      
                    />
                        
                        
                    </Col>
                    <NewCol size={0.5}>
                        <Row>
                            <InnerCol size={0.95}>
                                <Modal
                                    show={this.state.viewModal}
                                    startStopwatch={this.startStopwatch}
                                    text={this.state.text}
                                    textArray={this.state.textArray}
                                    refArray={this.state.refArray}
                                    ignore={this.state.ignore}
                                    childKey={this.state.childKey}
                                />
                                {this.state.showStopWatch ? <Stopwatch /> : null}
                            </InnerCol> 
                        </Row>
                        <Row>
                        {this.state.showExerciseLoader === "true" ? 
                            <InnerCol size={0.95}>
                                <span>Exercise loader</span>
                                <ExerciseLoader
                                    optobject={this.state.exercises}// eg 0 -> answers / sentences / type
                                />
                               
                            </InnerCol> 
                        : null} 
                        </Row>
                    </NewCol>
                </Row>
                <Row>
                    bottom row
                </Row>
            </Grid>
        )
    }

}

export default App;
