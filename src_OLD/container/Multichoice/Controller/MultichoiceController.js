import React, { Component } from 'react';
//import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
//import Multichoice from '../View/Multichoice'
//import Layout from '../../../UI/Layout';
import { Shuffle } from '../../../Exports/Shuffle/Shuffle';


class MultichoiceController extends Component{
    constructor(props){
        super(props);
      //  this.handleChange = this.handleChange.bind(this)
        this.tempQuest = {}
        this.tempAns = {}
        this.questions = []
        this.answers = []
        console.log("[MultichoiceController] constructor runs first")
        this.state = {questions:{}}
        this.answerKey = []
        
        
    }
   
    shouldComponentUpdate(nextProps,nextState){
        console.log("[MultichoiceController] shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(nextProps, prevState){
        console.log("[MultichoiceController] getSnapshotBeforeUpdate")
        return prevState
    }
    componentDidUpdate(){
        //console.log("[MultichoiceController] componentDidUpdate: ",this.state.questions.length)
    }
    
    componentDidMount(){ 
        //console.log("[MultichoiceController] componentDidMount runs last")
        //console.log("[MultichoiceController] this.props.exerciseContent: ",this.props.exerciseContent)
    try{
        for(let x=0; x < this.props.exerciseContent.length; x++){
            if(this.props.exerciseContent[x].type === 'multichoice'){
                for(let y=0; y < this.props.exerciseContent[x].sentences.length; y++){
                     this.tempQuest = {"question":this.props.exerciseContent[x].sentences[y]}
                     this.tempAns = this.props.exerciseContent[x].answers[y]
                     this.questions.push(this.tempQuest)
                     this.answers.push(this.tempAns)
                }
               
            }
        }
        
        this.answerKey = _.cloneDeep(this.answers)
        //this.props.exerciseContent.answerKey = this.answerKey
        for( const el of this.answers ){
                Shuffle(el)
              }
        
        this.setState({questions:this.questions}, this.renderContent)
        console.log("Answers : ",this.answers)
        console.log("Questions: ",this.questions)
        console.log("AnswerKey: ",this.answerKey)

    }catch(err){
        console.log("there was an error: ",err.message)
        
    }
        

    }
    renderContent = () => {
        console.log("[MultichoiceController] this.state.questions: ",this.state.questions.length)
        
    }
   
    handleChange = (event) => {
        console.log("handleChange clicked: ",this.answerKey[parseInt(event.target.name)][0])
        console.log("event target value: ",event.target.value)
       // alert(event)
        if(event.target.value === this.answerKey[parseInt(event.target.name)][0]){
          //this.state.myrefs[event.target.name].current.innerHTML = "correct!!"
          alert("correct")
        }else{
            //this.state.myrefs[event.target.name].current.innerHTML = "WRONG" 
            alert("wrong") 
        }
    }
   
    
    render(){ 
        
            return (
                
                  <div>
                  {this.questions.map((el,key)=>{
                    return (
                        <div key={key}>
                        
                            <label>
                            { el.question }
                            </label>     
                        
                        <div>
                        {this.answers[key].map((el,i)=>{
                            return(
                                <React.Fragment key={i}>
                                    <input type="radio" 
                                        key={ i }
                                        name={ key }
                                        value={ el }
                                        onChange={this.handleChange}
                                        />
                                    <label htmlFor={i}>
                                    { el }  
                                    </label>
                                    
                                </React.Fragment>   
                            )
                        })}
                        </div>
                        
                        </div>
                        
                    )
                }) 
            }
                        
                        </div>
                
               
                
            )
        }
      
            
}

export default MultichoiceController;


