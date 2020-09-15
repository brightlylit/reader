import React, { Component} from 'react';
import  DataLoader  from '../../../Exports/DataLoader/DataLoader';
import _ from 'lodash';
import Multichoice from '../View/Multichoice'
import Layout from '../../../UI/Layout';


class MultichoiceController extends Component{
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this)
        //this.myp = new DataLoader()
        {console.log("[MultichoiceController] this.props.myitems: ",this.props.myitems)}
        
    }
    state = {
        exerciseContent:{sentences:[],answers:[]},
        myrefs: [],
        answerKey: []
    }
    
    componentDidMount(){ 
        //this.myp.getData("Multichoice").then(( content ) => {
            //this.setState({ exerciseContent:this.myitems })
            //const arrayOfRefs = this.props.myitems.answers.map(() => React.createRef())                     
            //this.setState({ myrefs:arrayOfRefs })
            //this.setState( { answerKey: content.answerKey } )
            
            //console.log("[MultichoiceController] this.state.myrefs: ",this.state.myrefs)

       // })

    }
    /*
    handleChange(event) {
       console.log("this.state.myrefs: ",this.state.myrefs)
        if(event.target.value === this.state.answerKey[parseInt(event.target.name)][0]){
          this.state.myrefs[event.target.name].current.innerHTML = "correct!!"
        }else{
            this.state.myrefs[event.target.name].current.innerHTML = "WRONG"  
        }
    }
   */
    
    render(){ 
        
            return (
                
                <Layout>
                    
                     {/*<Multichoice
                        myitems={this.props.myitems}
                        onChange={this.handleChange}
                        value={this.state.exerciseContent.answers}
                        refarray={this.state.myrefs}
                     />*/}
                </Layout>
               
                
            )
        }
      
            
}

export default MultichoiceController;


