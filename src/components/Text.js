import React from 'react';
import './Text.css'
const Text = React.forwardRef( ( props, ref ) => {
    return(
        <div>
            <h3>Reading</h3>
            {props.textArray.map((el, i) => {
                return(
                    <span id={ i } 
                    key={ i } 
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