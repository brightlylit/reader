import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import Text from './components/Text'
import { Grid, Row, Col, NewCol, InnerCol } from './components/ExampleStyledComponent'
import DataLoader from './Exports/DataLoader/DataLoader'
import DropDown from './components/DropDown/DropDown'
import Key from './components/Key/Key'
import Stopwatch from './container/Stopwatch'
import ExerciseLoader from './components/ExerciseLoader/ExerciseLoader'

class App extends Component {
  constructor(props){ 
    super(props)
    this.theText = ""
    this.textArray = []
    this.set = {}
    this.curr = 0
    this.midPoint = 380
    this.midPointDown = 379
    this.myp = new DataLoader();
    this.content = {}  
    this.ignoreCounter = 0;
  }
  state = {
    text:[],
    refArray:[],
    ignore:[],
    key:[],
    textOptKeys:[],
    autostop:"false",
    headings:[],
    exercises:[]
  }
  componentDidMount(){
    this.myp.getData().then((content) => {
      let TOK = Object.keys(content)
      this.setState({textOptKeys:TOK, headings:content.headings})
      this.content = content 
    })  
  }
  onClickHandler = (e) => { 
    let a = e.target.name
      this.set = setInterval(()=> {this.timer(a)},100)     
    }
  onClickPauseHandler = () => {
    clearInterval(this.set)
    }
  timer = (a) => {
    switch(a){
      case "random": const l = this.state.refArray.length
        let randomSpan = Math.floor(Math.random() * l)
        try{
          if(!this.state.refArray[randomSpan].current.classList.contains('ignore')){
            this.state.refArray[randomSpan].current.classList.add('hideText')
          }
        }
          catch(err){
            clearInterval(this.set)
          }       
        break;
      case "animate": const m = this.state.refArray.length
        let mrandomSpan = Math.floor(Math.random() * m)
        this.state.refArray[mrandomSpan].current.style = "font-weight:bold;color:red"
        setTimeout(() => {this.state.refArray[mrandomSpan].current.style = "color:white"},1000)
        break;
      case "sequential": this.state.refArray[this.curr++].current.style = "color:white"
        break;
      case "middle":if(this.midPointDown >= 0){
        this.state.refArray[this.midPoint++].current.style = "color:white"
        this.state.refArray[this.midPointDown--].current.style = "color:white"
        }
        break;
      case "reload": window.location.reload();
        break;
      case "showWordsInContext": 
          for(let z=0; z < this.state.refArray.length; z++){
            this.state.refArray[z].current.classList.remove('hideText')
            this.state.refArray[z].current.classList.add('greyed')
          }
          for(let y=0; y < this.state.ignore.length; y++){
            for(let x=0; x < this.state.ignore[y].length; x++){

              this.state.refArray[this.state.key[y]].current.classList.remove('hideText')
              this.state.refArray[this.state.key[y]].current.classList.remove('greyed')
              this.state.refArray[this.state.key[y]].current.classList.add('ignoreChunk')
              this.state.refArray[this.state.key[y]].current.classList.add('ignore')
              this.state.refArray[this.state.ignore[y][x]].current.classList.remove('hideText')
              this.state.refArray[this.state.ignore[y][x]].current.classList.remove('greyed')
              this.state.refArray[this.state.ignore[y][x]].current.classList.add('ignoreChunk')
            }
          }
      
        break;
      default:
    }
  
  }
  
  onWordClickHandler = (e) =>{  
    for(var x = 0; x < this.state.key.length; x++){    
      if(this.state.refArray[e.target.id].current.innerHTML === this.state.refArray[this.state.key[x]].current.innerHTML){
        this.state.refArray[e.target.id].current.classList.add('ignore') 
        this.ignoreCounter++;
        if(this.ignoreCounter === 5){
          this.setState({autostop:"true"})
        }
      }
    }
  }
  onChangeHandler = (e) => {
    let keyArray = Object.keys(this.content)
    for (var x = 0; x < keyArray.length; x++){
      let y = keyArray[x]//T1 etc
      if(e.target.value === y){
        this.textArray = this.content[y].text.split(" ")
        let exerciseHeadings = this.content[y].exercises
        //let exerciseHeadingKeys = Object.keys(exerciseHeadings)
        let refarray = this.textArray.map(()=> React.createRef())
        this.setState({text:this.textArray, refArray:refarray, 
                      ignore:this.content[y].ignore, key:this.content[y].key, 
                      headings:this.content[y].headings,
                      exercises: exerciseHeadings})                     
      }      
    } 
    
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
          <button 
          name="random"
          onClick={this.onClickHandler}
          >Random</button>
          <button
          name="sequential"
          onClick={this.onClickHandler}
          >Sequential</button>
          <button 
          name="pause"
          onClick={this.onClickPauseHandler}
          >pause</button>&nbsp;
          <button 
          name="reload"
          onClick={this.onClickHandler}
          >reload</button>
          <button
          name="showWordsInContext"
          onClick={this.onClickHandler}
          >show words</button>
          <Stopwatch
          autostop={ this.state.autostop }
          className={'stopWatchSpan'}
          />
          </Col>
        </Row>
        <Row>
          <Col size={0.125}>
          </Col>
          <Col size={1.0}>
            <div>
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
            </div>
          
          </Col>
          <NewCol size={0.5}>
            <Row>
              <InnerCol size={0.95}>
                <span>Exercise Loader</span>
                <ExerciseLoader
                optobject={this.state.exercises}
                />
              </InnerCol>            
            </Row>
          </NewCol>
        </Row>
        <Row>
          &nbsp;
        </Row>
        <Row>
          <Col size={0.125}>
          </Col>
          <Col>
          <Key
          textarray={ this.textArray}
          answers={ this.state.key }
          />
          </Col>
        </Row>
      </Grid>
      
      
     
    );

  }
 
   
  
  
}

export default App;

