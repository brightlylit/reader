import React, { Component } from 'react';
class DropDown extends Component{
    constructor(props){
        super()
    }
    render(){      
        return (
        
            <select onChange={this.props.onChange}>
                {this.props.opts.map((el, i) => {
                    return(
                       // <option>--select--</option>
                        <option key={i} id={i}>{el}</option>
                        ) 
                })}  
            </select>
                               
             
        )
    }
}


export default DropDown
