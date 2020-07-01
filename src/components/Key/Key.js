import React from 'react';

const Key = (props) => {
    let words = []
    for(let x=0; x < props.textarray.length; x++){
        let word = props.textarray[props.answers[x]]
        console.log("word: ",word)
        words.push(word)
    }
        return(
            <div>
                <h3>Find the words</h3>
                
                    {words.map((el, i)=>{
                        return(
                            <p key={i}>{el}</p>
                        )
                    })}
                
            </div>
        )
    
        

}

export default Key;

