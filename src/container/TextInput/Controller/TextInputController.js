import TextInput from '../View/TextInput';

import React, { Component } from 'react';
import Layout from '../../../UI/Layout';
import Shuffle from '../../../Exports/Shuffle/Shuffle';

    class TextInputController extends Component{
        constructor(props){
            super(props)
             //let inputWidth = 70
             this.currentInput = 50;
            // let currentInpAns = ""
            // this.arrayOfRefs = []
             //this.answers = []
             this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this)
             this.onClickhandler = this.onClickhandler.bind(this);
            try{
               // this.arrayOfRefs = this.props.myitems.answers.map(() => React.createRef())
               // this.answers = this.props.myitems.answers
               // console.log("[TextInputController]this.arrayOfRefs: ",this.arrayOfRefs)
            }
            catch(err){
               // window.location.href = "/"
            }  
        }
        state = {
            exerciseContent:{sentences:[],answers:[], answerKey:[]},
            refArray:[],
            buttonsAreVisible:"true"
        }
        /*
        arrayOfRefs = props.myitems[2].answers.map(() => React.createRef())
            answers = props.myitems[2].answers
            */
        onClickhandler( event ){
           alert(event.target.value)
           let x = event.which || event.keyCode; 
            //console.log("key code: ", x)
           // this.currentInput = event.target.name
            console.log("this.arrayOfRefs: ",this.arrayOfRefs)
           
            //let currentInpAns = this.arrayOfRefs[this.currentInput].current.value
           // console.log("currentInpAns: ",currentInpAns)
            //let ans = this.answers[this.currentInput][0]
           // console.log("ans: ",ans)
           // let answerLength = currentInpAns.length
           // if(currentInpAns === ans){
               // alert("correct")
                //this.arrayOfRefs[event.target.name].current.innerHTML = "correct!!"
           // }

        }
        inputOnChangeHandler( event ){
            
            
            //inputState.refArray[currentInput].current.style = "width:" + inputWidth + "px"
           // console.log("answerLength: ", inputState.refArray[currentInput].current.value.length)
           // console.log("inputState.refArray[currentInput].current.value.length: ",inputState.refArray[currentInput].current.value.length)
            
           //if(inputState.refArray[currentInput].current.value.length >= 2){
                //console.log("currentInput: ", currentInput)
               //inputWidth = inputState.refArray[currentInput].current.getBoundingClientRect().width
               //console.log("inputwidth: ", inputWidth)
               //inputState.refArray[currentInput].current.style = "width:" + inputWidth + "px"
               
            //}
            /* if( newLength >= inputState.width.width / 10 ){ 
                console.log("inputState.width.width----2: ",inputState.width.width)
                mywidth.width = inputState.width.width
                mywidth.width = mywidth.width + 10
                console.log("mywidth.width: ",mywidth.width)
               setInputState({
                   password: inputState.password,
                   width: mywidth, 
                   exerciseContent: inputState.exerciseContent,
                   answerKey: inputState.answerKey,
                   refArray: inputState.refArray,
                })
            }*/
           // if( inputState.password.length < mywidth.width / 10 && inputState.width.width >= mywidth.width ){
                //inputState.width.width = inputState.width.width - 10
                //if( inputState.width.width === mywidth.width || inputState.password.length < 2 ){
                //    inputState.width.width = mywidth.width
               // }
            //}
            //inputState.width.width = inputState.width.width.toString() + "px"//turn width into a string..
            
            /*setInputState({
                password: event.target.value,
                width: inputState.width,
                exerciseContent: inputState.exerciseContent,
                answerKey: inputState.answerKey,
                refArray: inputState.refArray,
                })*/
                
            //inputState.width.width = inputState.width.width.substring(0, inputState.width.width.length - 2)
            //inputState.width.width = parseInt(inputState.width.width)//..and back to a number to be incremented
            
        }
        render(){
            return(
                <Layout>
                    
                   {/* <TextInput
                        refarray={this.arrayOfRefs}
                        myitems={this.props.myitems}
                        onKeyDown={ this.inputOnChangeHandler }
                        visible={ this.state.buttonsAreVisible }
                        onClick={ this.onClickhandler }
                   />*/}
                </Layout>

            )

        }

    }

export default TextInputController;