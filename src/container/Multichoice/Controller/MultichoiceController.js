import React, { Component} from 'react';
//import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
import Multichoice from '../View/Multichoice'
import Layout from '../../../UI/Layout';


class MultichoiceController extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)  
        try{
            this.arrayOfRefs = this.props.myitems[1].answers.map(() => React.createRef())
            this.answers = this.props.myitems[1].answers
        }
        catch(err){
            window.location.href = "/"
        }       
        
    }
    state = {
        exerciseContent:{sentences:[],answers:[]},
        myrefs: [],
        answerKey: []
    }
    
    componentDidMount(){ 
       // let content = this.props.myitems
        //this.setState({ exerciseContent:content })
            //const arrayOfRefs = this.state.exerciseContent.answers.map(() => React.createRef())                     
            //this.setState({ myrefs:arrayOfRefs })
            //this.setState( { answerKey: content.answerKey } )

    }
    
    handleChange(event) {
        if(event.target.value === this.answers[parseInt(event.target.name)][0]){
          this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
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


