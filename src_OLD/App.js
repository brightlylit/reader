import React, { Component } from 'react'
import './App.css'
//import _ from 'lodash'
import { Grid, Row, Col, NewCol, InnerCol } from './components/ExampleStyledComponent'
import DataLoader from './Exports/DataLoader/DataLoader'
import TextHider from './Exports/TextHider/TextHider'
import DropDown from './components/DropDown/DropDown'
//import Key from './components/Key/Key'
import Stopwatch from './container/Stopwatch'
import ExerciseLoader from './components/ExerciseLoader/ExerciseLoader'

class App extends Component {
  constructor(props){ 
    super(props)
    this.theText = ""
    this.textArray = []
    this.refArray = []
    this.curr = 0
    this.midPoint = 380
    this.midPointDown = 379
    this.myp = new DataLoader();
    this.content = {}  
    this.ignoreCounter = 0;
    this.answerKey = [];

  }
  state = {
    text:[],
    refArray:[],
    ignore:[],
    childKey:[],
    textOptKeys:[],
    autostop:"false",
    headings:[],
    exercises:[],
    showExerciseLoader:"false"
  }
  componentDidMount(){
    this.myp.getData().then((content) => {//content === eg T1 -> exercises -> 0 -> answers / sentences / type
      let TOK = Object.keys(content)
      this.setState({textOptKeys:TOK, headings:content.headings})
      this.content = content //root node is T1 / T2 etc   
    })  
  }
 
  onChangeHandler = (e) => { 
    let keyArray = Object.keys(this.content) // eg T1/T2 etc
    for (var x = 0; x < keyArray.length; x++){
      let y = keyArray[x] //T1 etc
      if(e.target.value === y){ //check selected text name (T1 etc) exists
        this.textArray = this.content[y].text.split(" ")//split the content of the text node into an array
        console.log("[App]this.content[y].key: ",this.content[y].key)
        this.answerKey = this.content[y].key
       // this.text = this.content[y].text
      //alert(this.content[y].key)
        let exerciseHeadings = this.content[y].exercises //nodes labelled 0,1,2 etc
        this.refArray = this.textArray.map(()=> React.createRef())
        console.log("this.refArray",this.refArray)
        //alert("childKey: "+this.content[y].key)
        this.setState({ 
                      text:this.textArray,
                      //refArray:this.refArray, 
                      ignore:this.content[y].ignore, 
                      childKey:this.content[y].key, 
                      headings:this.content[y].headings,
                      exercises: exerciseHeadings
                      
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
          <Col size={0.125}>
          </Col>
          <Col>
            <DropDown
            opts={this.state.textOptKeys}
            onChange={this.onChangeHandler}
            />
            
            <Stopwatch
            autostop={ this.state.autostop }
            className={'stopWatchSpan'}
            />
          </Col>
        </Row>
        <Row>
          <hr/>
        </Row>
        <Row>
        <Col size={0.125}>
        </Col> 
        <Col size={0.75}>
        <TextHider
            refArray={ this.refArray }
            childKey={this.answerKey}
            ignore={this.state.ignore}
            text={ this.state.text }
        />
        </Col>
        <NewCol size={0.5}>
            <Row>
                {this.state.showExerciseLoader === "true" ? 
                  <InnerCol size={0.95}>
                    <ExerciseLoader
                      optobject={this.state.exercises}// eg 0 -> answers / sentences / type
                    />
                  </InnerCol> 
                : null}        
            </Row>
        </NewCol>
        </Row>
        <Row>
        <Col size={0.125}>
        </Col>

       
        </Row>
        
        
        <Row>
          <Col size={0.125}>
          </Col>
          <Col size={1.0}>
           {/* <div>
              <h3>Welcome to the reader.</h3>
              <Text
              textArray={ this.state.text }
              className={ "unblanked" }
              onClick={ this.onWordClickHandler }
              refArray={ this.state.refArray }
              headings={ this.state.headings }
              />
              <hr/>
              <p>Choose a text from the list above.</p>
            </div>*/}
          
          </Col>
          
        </Row>
        <Row>
          &nbsp;
        </Row>
        <Row>
          <Col size={0.125}>
          </Col>
          {/*<Col>
          Key here
            <Key
              textarray={ this.textArray}
              answers={ this.state.childKey }
            />
          </Col>*/}
        </Row>
      </Grid> 
    );
  }
}

export default App;

