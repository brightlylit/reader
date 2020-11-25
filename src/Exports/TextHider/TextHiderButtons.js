import React, {Component} from 'react';

class TextHiderButtons extends Component {
    constructor(props){
        super(props)
    }
   // state = { refArray:[],
              //childKey}
    onClickHandler = (e) => { 
        e.persist()
        console.log("[TextHiderButtons]this.props.ignore: ",this.props.ignore)
        console.log("[TextHiderButtons]this.props.childKey: ",this.props.childKey)
        this.props.startWatch()
        //const params = {numwords:this.props.setNumWords,interval:this.props.setInterval}
        this.set = setInterval(()=> {this.timer(e.target.name, this.props.setNumWords)},this.props.setInterval)    
       // console.log("[TextHiderButtons] props: ",this.props ) 
       console.log("number of words is: ", this.props.setNumWords)
       console.log("interval is: ", this.props.setInterval)
        }
    onClickPauseHandler = () => {
        clearInterval(this.set)
        }
    timer = (a, numwords) => {
        console.log("timer called")
        console.log("numwords: ",numwords)
        switch(a){
          case "random": 
                const l = this.props.refArray.length
                for(let x=0; x < numwords; x++){
                    let randomSpan = Math.floor(Math.random() * l)
                    try{
                        if(!this.props.refArray[randomSpan].current.classList.contains('ignore')){
                            //this.props.refArray[randomSpan].current.classList.add('hideText')
                            this.props.refArray[randomSpan].current.classList.add('unblankedblurry')
                            //alert("hidetext")
                          }
                        }
                    catch(err){
                        clearInterval(this.set)
                    } 
                }
                     
            break;
          case "animate": //const m = this.props.refArray.length
            //let mrandomSpan = Math.floor(Math.random() * m)
           // this.props.refArray[mrandomSpan].current.style = "font-weight:bold;color:red"
           // setTimeout(() => {this.props.refArray[mrandomSpan].current.style = "color:white"},1000)
            break;
          case "sequential": this.props.refArray[this.curr++].current.style = "color:white"
            break;
          case "middle":if(this.midPointDown >= 0){
           // this.props.refArray[this.midPoint++].current.style = "color:white"
           // this.props.refArray[this.midPointDown--].current.style = "color:white"
            }
            break;
          case "showWordsInContext": 
            
              for(let z=0; z < this.props.refArray.length; z++){
                this.props.refArray[z].current.classList.remove('hideText')
                this.props.refArray[z].current.classList.remove('unblankedblurry')
                this.props.refArray[z].current.classList.add('greyed')
              }
              for(let y=0; y < this.props.ignore.length; y++){
                for(let x=0; x < this.props.ignore[y].length; x++){
    
                  this.props.refArray[this.props.childKey[y]].current.classList.remove('hideText')
                  this.props.refArray[this.props.childKey[y]].current.classList.remove('greyed')
                  this.props.refArray[this.props.childKey[y]].current.classList.remove('unblankedblurry')

                  this.props.refArray[this.props.childKey[y]].current.classList.add('ignoreChunk')
                  this.props.refArray[this.props.childKey[y]].current.classList.add('ignore')

                  this.props.refArray[this.props.ignore[y][x]].current.classList.remove('hideText')
                  this.props.refArray[this.props.ignore[y][x]].current.classList.remove('greyed')
                  this.props.refArray[this.props.childKey[y]].current.classList.remove('unblankedblurry')

                  this.props.refArray[this.props.ignore[y][x]].current.classList.add('ignoreChunk')
                 
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
                    {/*<button
                    name="sequential"
                    onClick={this.onClickHandler}
                    >Sequential</button>*/}
                  <button 
                    name="pause"
                    onClick={this.onClickPauseHandler}
                  >pause</button>
                    <a href="/">reload</a>    
                  <button
                    name="showWordsInContext"
                    onClick={this.onClickHandler}
                  >show words</button>
                  <span>
                    
                  </span>
                 
            </div>

        )
    }
}
export default TextHiderButtons