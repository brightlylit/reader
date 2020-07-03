import React from 'react';
import './Text.css'
const Text = React.forwardRef( ( props, ref ) => {
    function changeHandler(){
        alert("changed")

    }
    return(
        <div>
            {props.textArray.map((el, i) => {
                if(el.includes('<h3>')){
                   el = el.slice(4, el.length)
                   return(
                       <h3 
                       key={i}
                       ref = {props.refArray[i]}>
                       {el}
                       </h3>
                   ) 
                }
                if(el.includes('<se>')){
                    el = el.slice(4, el.length)
                    return(
                        
                        
                        <p key={i} 
                        className='ignore'
                        ref = {props.refArray[i]}
                        >
                        <select
                        ref = {props.refArray[i]}
                        onChange={changeHandler}>
                            {props.headings.map((el,i) =>{
                                    return(
                                        <option key={i}>{el}</option>
                                    )
                                })}
                        >
                        </select>
                        </p>
                        
                      
                         
                    )                   
                }
                if(el.includes('<br>')){
                    el = el.slice(4, el.length)
                    return(
                        <React.Fragment key={i}>
                            <span id={i}
                            key={i}
                            onClick={ props.onClick }
                            className={props.className}
                            ref = {props.refArray[i]}>
                                { el }
                            </span>
                            <br/>
                            <br/>
                        </React.Fragment>
                        
                    )
                }
                if(el.includes('<bo>')){
                    el = el.slice(4, el.length)
                    return(
                        <span id={ i } 
                        key={ i } 
                        onClick={ props.onClick }
                        className={props.className}
                        className={"boldit"}
                        ref = {props.refArray[i]}>
                            { el + ' ' }
                        </span>
                    )
                }
                return(
                    <span id={ i } 
                    key={ i } 
                    //headings={ props.headings }
                    onClick={ props.onClick }
                    className={props.className}
                    ref = {props.refArray[i]}>
                        { el + ' ' }
                    </span>
                )
            })}
        </div>
    )
})
export default Text;
