import React, { useState, useEffect } from 'react';
import MultichoiceController from '../../container/Multichoice/Controller/MultichoiceController';
import PGddlController from '../../container/Multichoice/Controller/PGddlController'
import TextInputController from '../../container/TextInput/Controller/TextInputController'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
const ExerciseLoader = (props) => {
    let optarray = []
    for(let element in props.optobject){
        optarray.push(element)
    }   
    //const [contentState, setContentState] = useState({
       // state:{exercises: props.optobject}         
   // }) 
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
                {console.log("[ExerciseLoader] props.optobject: ",props.optobject)}
                <Route path="/ex0" children={ <MultichoiceController myitems={props.optobject} />} />
                <Route path="/ex1" children={ <PGddlController myitems={props.optobject} />} />
                <Route path="/ex2" children={ <TextInputController myitems={props.optobject} />} />
                
            </Switch>  
        </BrowserRouter>

    )
}

export default ExerciseLoader

