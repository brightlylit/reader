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
            this.arrayOfRefs = this.content[0].answers.map(() => React.createRef())
        }
        catch(err){
            //alert(err.message)
            window.location.href = "/"
        }
        
       
            for( const el of this.content[0].answers ){
                //Shuffle(el)
                console.log("el here: ",el)
              }
    }
    handleChange(event) {
        if(event.target.value === this.content[0].answers[parseInt(event.target.name)][0]){
            this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
        }else{
            this.arrayOfRefs[event.target.name].current.innerHTML = "WRONG"  
        }
    }
    
    render(){ 
            return (
               
                    <PGddl
                        myitems={this.props.myitems}
                        onChange={this.handleChange}
                        refarray = {this.arrayOfRefs}
                    />   
                
            )
        }
      
            
}

export default PGddlController;


