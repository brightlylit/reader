import React, { Component } from 'react';
import MultichoiceController from '../container/Multichoice/Controller/MultichoiceController';
//import PGddlController from '../../container/Multichoice/Controller/PGddlController'
//import TextInputController from '../../container/TextInput/Controller/TextInputController'
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class ExerciseLoader extends Component {
    render(){
        return(   
           
            <div>
                theexerciseLoader 
                 <MultichoiceController exerciseContent={this.props.optobject}/>
            </div> 
        

        )
    }
}

export default ExerciseLoader
/*


<BrowserRouter > 
            <span>Exercise Loader</span> 
            <nav>
                <ul>
                    {Object.keys(this.props.optobject).map((el,i)=>{
                        return(
                            <li key={i} name={i}>
                                <Link to={'ex'+el} >{`section ${i}`}</Link>
                            </li>
                            )
                        })}
                </ul>  
            </nav>
            <Switch>   
                        return(
                            <React.Fragment>
                                {this.props.optobject.map((el,i)=>{
                                    return(
                                        <div key={i}>
                                           <Route children={<MultichoiceController myitems={this.props.optobject} />}/>
                                            <Route component={this.CreateMultichoiceAppComponent} exerciseNum={i}/>
                                            </div>
                                            )
                                        })                           
                                    }        
                                    </React.Fragment>
                                )
                            
                    </Switch>  
                </BrowserRouter>




*/

