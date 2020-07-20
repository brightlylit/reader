import React from 'react';

const Key = (props) => {
    let words = ['Find the words: ']
    for(let x = 0; x < props.answers.length; x++){
        //console.log("props.textarray[props.answers[x]: ",props.textarray[props.answers[x]])
        let word = props.textarray[props.answers[x]]
        if(word.includes('<')){
            word = word.slice(4, word.length)
        }
        word = word + ' '
        words.push(word)
    }
        return(
            <React.Fragment>

                            {words}    
            </React.Fragment> 
        )
}

export default Key;

