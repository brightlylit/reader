import React, { Component} from 'react';
//import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
import PGddl from '../View/PGddl'
import Shuffle from '../../../Exports/Shuffle/Shuffle'

class PGddlController extends Component{
    constructor(props){ //called 1st
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.content = this.props.myitems;
        try{
            for(let x=0; x < this.props.myitems.length; x++){
                if(this.props.myitems[x].type === "pgDDLpara"){
                    console.log("Exercise type is: ",this.props.myitems[x].type)
                    this.arrayOfRefs = this.props.myitems[x].answers.map(() => React.createRef())
                    this.answerKey = this.props.myitems[x].answers
                    this.answers = _.cloneDeep(this.props.myitems[x].answers)
                   //console.log("this.answerKey.length: ",this.answerKey.length)
                   ///console.log("this.answers.length: ",this.answers.length)
                       for( const el of this.answers ){
                           Shuffle(el)
                           console.log("[pgDDLController] shuffled: ",el)
                         }
                         
                }
            }

            
            
     console.log("pgDDLController: ",this.props.myitems)
          
        } 
        catch(err){
            window.location.href = "/"
        } 
    }
    handleChange(event) {
        if(event.target.value === this.answerKey[parseInt(event.target.name)][0]){
            this.arrayOfRefs[event.target.name].current.innerHTML = "CORRECT"  
        }else{
            this.arrayOfRefs[event.target.name].current.innerHTML = "WRONG"  
        }
    }
    
    render(){ 
            return (
               
                    <PGddl
                        myitems={this.props.myitems}
                        onChange={this.handleChange}
                        value={this.answers}
                        refarray = {this.arrayOfRefs}
                    />   
                
            )
        }
      
            
}

export default PGddlController;


