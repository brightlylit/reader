import React, { useState, useEffect } from 'react';
//import MultichoiceController from '../../container/Multichoice/Controller/MultichoiceController';
import PGddlController from '../../container/Multichoice/Controller/PGddlController'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
const ExerciseLoader = (props) => {
    let optarray = []
    let loadTemplate = ""
    let objVals = {}
    for(let element in props.optobject){
        optarray.push(element)
        console.log("element ",element)
    }
    console.log("props.optobject: ",props.optobject)
   
    
    const [contentState, setContentState] = useState({
        content:{exercises: {}} 
              
    })
   // useEffect(()=>{
        objVals = Object.values(props.optobject)
       // setContentState({content:{exercises:objVals}}) 
        console.log("objVals: ",objVals)
        
   // },[]) 

    return( 
        
        <BrowserRouter>  
            <nav>
                <ul>
                {optarray.map((el,i)=>{
                    return(
                        <li key={i} name={i}>
                            <NavLink to="/ex1" exact >{el}</NavLink>  
                        </li>
                        )
                    })}
                </ul>  
            </nav>
            <Switch>
                <Route 
                    path="/ex1" 
                    render={(props) => (
                        <PGddlController {...props} myitems={props.optobject}/>
                    )}
                    />
            </Switch>  
        </BrowserRouter>

    )
}

export default ExerciseLoader

{/*{contentState.content.showEx ?
        <PGddlController
        myitems={contentState.content.exercises}/>
        : null}*/}
        {/* <Route path="/ex1" component={ PGddlController } />
        <Route path="/ex1" render={(props) => < PGddlController {...props} />}
        {/*<Route path="/TextInput" component={ TextInputDataLoader } />
        <Route path="/RadioButtons" component={ DropDownDataLoader } />*/}