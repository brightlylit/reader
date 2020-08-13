import React, { Component} from 'react';
import _ from 'lodash';
import Multichoice from '../View/Multichoice'
import Layout from '../../../UI/Layout';
import Shuffle from '../../../Exports/Shuffle/Shuffle';


class MultichoiceController extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this) 
        try{
            for(let x=0; x < this.props.myitems.length; x++){
                if(this.props.myitems[x].type === "multichoice"){
                    console.log("Exercise type is: ",this.props.myitems[x].type)
                    this.arrayOfRefs = this.props.myitems[x].answers.map(() => React.createRef())
                    this.answerKey = this.props.myitems[x].answers
                    this.answers = _.cloneDeep(this.props.myitems[x].answers)
                   console.log("this.answerKey.length: ",this.answerKey.length)
                   console.log("this.answers.length: ",this.answers.length)
                       for( const el of this.answers ){
                           Shuffle(el)
                         }
                         
                }
            }
          
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
                <Layout>
                     <Multichoice
                        myitems={this.props.myitems}
                        onChange={this.handleChange}
                        value={this.answers}
                        refarray={this.arrayOfRefs}
                     />

                </Layout>
               
                
            )
        }
      
            
}

export default MultichoiceController;


