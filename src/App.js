import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, NewCol, InnerCol } from './components/ExampleStyledComponent';
import DataLoader from './Exports/DataLoader';
import ExerciseLoader from './components/ExerciseLoader';
import Text from './components/Text'
import TextHider from './Exports/TextHider/TextHider'
import TextHiderButtons from './Exports/TextHider/TextHiderButtons'
import Stopwatch from './container/Stopwatch';
import Key from './components/Key'
import DropDown from './components/DropDown';
import Modal from './UI/Modal/Modal';
import { AnalyticsEventBuilder } from 'firebase-functions/lib/providers/analytics';

class App extends Component{
    constructor(props){
        super(props)
        this.dataloader = new DataLoader();
    }
    state = {
        //viewModal:false,
        textOptKeys:[],
        refArray:[],
        //headings:[]
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
        return this.state.viewModal
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
            }
           this.text = this.content[y].text
           let exerciseHeadings = this.content[y].exercises //nodes labelled 0,1,2 etc
            this.refArray = this.textArray.map(()=> React.createRef())
            this.setState({ 
                          text:this.text,
                          textArray:this.textArray,
                          refArray:this.refArray, 
                          //ignore:this.content[y].ignore, 
                          //childKey:this.content[y].key, 
                          //headings:this.content[y].headings,
                          //exercises: exerciseHeadings
                          
                        }) 
                if(!this.content[y].exercises){
                  this.setState({showExerciseLoader:"false"}) 
                }else{
                  this.setState({showExerciseLoader:"true"}) 
                  
                }
                              
            }
        }
        return this.state
    } 
    render(){
        return (
            <Grid>
                <Row>
                    top row
                </Row>
                <Row>
                    <Col size={0.125}>
                    <TextHiderButtons/>    
                    </Col>
                    <Col size={1.0}>
                    <DropDown
                        opts={this.state.textOptKeys}
                        onChange={this.onChangeHandler}
                    />
                    <Modal
                        show={this.state.viewModal}
                        modalClosed={this.closeModal}
                    />
                    <span>text hider</span>
                    <TextHider
                        text={this.state.text}
                        textArray={this.state.textArray}
                        refArray={this.state.refArray}
                        childKey={this.answerKey}
                    />
                    </Col>
                    <NewCol size={0.5}>
                        <Row>
                            <InnerCol size={0.95}>
                                Exercise loader
                            </InnerCol> 
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
