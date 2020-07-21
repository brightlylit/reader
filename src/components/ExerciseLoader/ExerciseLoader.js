import React, { useState, useEffect } from 'react';
import MultichoiceController from '../../container/Multichoice/Controller/MultichoiceController';
import PGddlController from '../../container/Multichoice/Controller/PGddlController'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
const ExerciseLoader = (props) => {
    let optarray = []
   // let loadTemplate = ""
   // let objVals = {}
    for(let element in props.optobject){
        optarray.push(element)
        //console.log("element ",element)
    }
   //console.log("props.optobject: ",props.optobject)
   //console.log("props.optobject.length: ",props.optobject.length)
    
    const [contentState, setContentState] = useState({
        state:{exercises: props.optobject}         
    })
   
  
    return( 
        <BrowserRouter>  
            <nav>
                <ul>
                {optarray.map((el,i)=>{
                    return(
                        <li key={i} name={i}>
                            <NavLink to={'ex'+el} exact >{i+1}</NavLink>
                            
                        </li>
                        )
                    })}
                </ul>  
            </nav>
            <Switch>
                <Route path="/ex0" children={ <MultichoiceController myitems={props.optobject} />} />
                <Route path="/ex1" children={ <PGddlController myitems={props.optobject} />} />
                
            </Switch>  
        </BrowserRouter>

    )
}

export default ExerciseLoader

{/*<NavLink to="/ex2" exact >{el}</NavLink> 
<Route path="/ex2" children={ <MultichoiceController myitems={props.optobject} />} />*/}