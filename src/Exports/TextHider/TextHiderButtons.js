import React, {Component} from 'react';

class TextHiderButtons extends Component {
    constructor(props){
        super(props)
    }
    onClickHandler = (e) => { 
        e.persist()
        this.set = setInterval(()=> {this.timer(e.target.name)},10)    
        console.log("onclickhandler: ",e.target.name ) 
        }
    onClickPauseHandler = () => {
        clearInterval(this.set)
        }
      timer = (a) => {
        console.log("timer called")
        switch(a){
          case "random": 
            const l = this.props.refArray.length
            console.log("this props refarray.length: ",this.props.refArray.length)
            let randomSpan = Math.floor(Math.random() * l)
            try{
              if(!this.state.refArray[randomSpan].current.classList.contains('ignore')){
                  this.state.refArray[randomSpan].current.classList.add('hideText')
                  alert("hidetext")
              }
            }
              catch(err){
                clearInterval(this.set)
              }       
            break;
          case "animate": //const m = this.state.refArray.length
            //let mrandomSpan = Math.floor(Math.random() * m)
           // this.state.refArray[mrandomSpan].current.style = "font-weight:bold;color:red"
           // setTimeout(() => {this.state.refArray[mrandomSpan].current.style = "color:white"},1000)
            break;
          case "sequential": //this.state.refArray[this.curr++].current.style = "color:white"
            break;
          case "middle":if(this.midPointDown >= 0){
           // this.state.refArray[this.midPoint++].current.style = "color:white"
           // this.state.refArray[this.midPointDown--].current.style = "color:white"
            }
            break;
          case "showWordsInContext": 
              for(let z=0; z < this.state.refArray.length; z++){
                this.state.refArray[z].current.classList.remove('hideText')
                this.state.refArray[z].current.classList.add('greyed')
              }
              for(let y=0; y < this.state.ignore.length; y++){
                for(let x=0; x < this.state.ignore[y].length; x++){
    
                  this.state.refArray[this.state.childKey[y]].current.classList.remove('hideText')
                  this.state.refArray[this.state.childKey[y]].current.classList.remove('greyed')
                  this.state.refArray[this.state.childKey[y]].current.classList.add('ignoreChunk')
                  this.state.refArray[this.state.childKey[y]].current.classList.add('ignore')
                  this.state.refArray[this.state.ignore[y][x]].current.classList.remove('hideText')
                  this.state.refArray[this.state.ignore[y][x]].current.classList.remove('greyed')
                  this.state.refArray[this.state.ignore[y][x]].current.classList.add('ignoreChunk')
                 
                }
              }
          
            break;
          default:
        }
      
      }
    render(){
        return(
            <div>
                 <button 
                    name="random"
                    onClick={this.onClickHandler}
                    >Random</button>
                    <button
                    name="sequential"
                    onClick={this.onClickHandler}
                    >Sequential</button>
                    <button 
                    name="pause"
                    onClick={this.onClickPauseHandler}
                    >pause</button>
                    <a href="/">reload</a>    
                    <button
                    name="showWordsInContext"
                    onClick={this.onClickHandler}
                    >show words</button>
                    <span>Number of words:</span>
                    <input type="radio" id="one" name="number" value="1"/>
                    <label htmlFor="one">1</label>
                    <input type="radio" id="two" name="number" value="2"/>
                    <label htmlFor="two">2</label>
                    <input type="radio" id="three" name="number" value="3"/>
                    <label htmlFor="three">3</label> 
                    <input type="radio" id="four" name="number" value="4"/>
                    <label htmlFor="four">4</label>
                    <span>Speed, every X seconds:</span>
                    <input type="radio" id="two" name="speed" value="2"/>
                    <label htmlFor="two">2</label>
                    <input type="radio" id="four" name="speed" value="4"/>
                    <label htmlFor="four">4</label>
                    <input type="radio" id="eight" name="speed" value="8"/>
                    <label htmlFor="three">8</label> 
            </div>

        )
    }
}
export default TextHiderButtons