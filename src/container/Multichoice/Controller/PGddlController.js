import React, { Component} from 'react';
//import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
import PGddl from '../View/PGddl'
import Layout from '../../../UI/Layout';

class PGddlController extends Component{
    constructor(props){ //called 1st
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.content = this.props.myitems;
        //this.arrayOfRefs = this.content[0].answers.map(() => React.createRef())
        console.log("this.porps: ",this.props)
        
    }
    handleChange(event) {
        console.log("event.target.value: ",event.target.value)
        console.log("this.content[0].answers: ",this.content[0].answers[parseInt(event.target.name)][0])
        if(event.target.value === this.content[0].answers[parseInt(event.target.name)][0]){
            this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
        }else{
            this.arrayOfRefs[event.target.name].current.innerHTML = "WRONG"  
        }
    }
    
    render(){ //component creation lifecycle called 3rd -> child components also rendered at this stage
            
            return (
                <Layout>{"pgddlcontroller"}
                    <PGddl
                        myitems={this.content}
                        onChange={this.handleChange}
                       // value={this.content[0].answers}
                        refarray = {this.arrayOfRefs}
                    />

                </Layout>
               
                
            )
        }
      
            
}

export default PGddlController;


