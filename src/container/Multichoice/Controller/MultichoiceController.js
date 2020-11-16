import React, { Component} from 'react';
//import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
import Multichoice from '../View/Multichoice';
import Layout from '../../../UI/Layout';
import Shuffle from'../../../Exports/Shuffle';


class MultichoiceController extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.answers = _.cloneDeep(this.props.exerciseContent[0].answers)
        this.answersArray = []
        for(let x=0; x < this.props.exerciseContent.length; x++){
            this.answersArray.push(this.props.exerciseContent[x].answers)
        }
        this.arrayOfRefs = this.props.exerciseContent[0].answers.map(() => React.createRef())

        
    }
    state = {
        exerciseContent:{sentences:[],answers:[]},
        myrefs: [],
        answerKey: []
    }
    makeRefs = () => {
            
    }
    componentDidMount(){ 
        this.setState({exerciseContent:this.props.exerciseContent})
        for( const el of this.answers ){
            Shuffle(el)
          }
        console.log("this.answers: ",this.answers)
        console.log("this.answersArray: ",this.answersArray)
        console.log("this.props.exerciseContent[0].answers: ",this.props.exerciseContent[0].answers)
        console.log("[Multichoice Controller]this.arrayOfRefs: ",this.arrayOfRefs)
        /*for(let x=0; x < this.props.exerciseContent.length; x++){
            this.answersArray.push(this.props.exerciseContent[x].answers)
            for(let y=0; y < this.props.exerciseContent[x].answers.length; y++){
                for(let z=0; z < this.props.exerciseContent[x].answers[y].length; z++)
                this.answers.push(this.props.exerciseContent[x].answers[y][z])
            }
        }*/
        
       // this.arrayOfRefs = this.answers.map(()=> React.createRef())
        //console.log("this.arrayOfRefs: ", this.arrayOfRefs)
        //console.log("this.answers: ", this.answers)
       // console.log("this.arrayOfRefs: ",this.arrayOfRefs)

    }
    
    handleChange(event) {
        console.log("----------------------------handlechange-----------------------")
        console.log("event.target.value: ",event.target.value)
        console.log("this.answers[parseInt(event.target.name)][0]: ",this.answers[parseInt(event.target.name)][0])
        this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
       /* if(event.target.value === this.answers[parseInt(event.target.name)][0]){
          this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
        }else{
            this.arrayOfRefs[event.target.name].current.innerHTML = "WRONG"  
        }*/
    }
   
    
    render(){ 
            return (
                <Layout>
                    <Multichoice
                        exerciseContent={this.props.exerciseContent}
                        onChange={this.handleChange}
                        value={this.answers}
                        refarray={this.arrayOfRefs}
                    />

                </Layout>
               
                
            )
        }
      
            
}

export default MultichoiceController;


