import React, { Component } from 'react';
import MultichoiceController from '../../container/Multichoice/Controller/MultichoiceController';
import PGddlController from '../../container/Multichoice/Controller/PGddlController'
import TextInputController from '../../container/TextInput/Controller/TextInputController'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class ExerciseLoader extends Component {
    constructor(props){
        super(props)
            this.CreateMultichoiceAppComponent = () => <MultichoiceController myitems={this.props.optobject} />
            this.CreateTextInputAppComponent = () => <TextInputController myitems={this.props.optobject}/>
            
       
    }
    

    render(){
        return(       
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
                                {console.log("this.props.optobject: ",this.props.optobject[2].type)}
                                {this.props.optobject.map((el,i)=>{
                                    return(
                                        <div>
                                        {
                                        el.type === "multichoice" ?
                                            <Route component={this.CreateMultichoiceAppComponent}/> : null}
                                            
                                        {el.type === "pgTI" ? 
                                            <Route component={this.CreateTextInputAppComponent}/> : null
                                        }
                                        </div>
                                        
                                    )
                                })}
                                {/*<Route component={this.CreateMultichoiceAppComponent}/>
                                <Route component={this.CreateTextInputAppComponent}/>  */}
                            </React.Fragment>
                        )
                    
            </Switch>  
        </BrowserRouter>

        )
    }
}

export default ExerciseLoader

