import React, {Component} from 'react';

class TextHiderButtons extends Component {
    onClickHandler = (e) => { 
        e.persist()
        this.props.startWatch()
        this.set = setInterval(()=> {this.timer(e.target.name, this.props.setNumWords)},this.props.setInterval)    
        }
    onClickPauseHandler = () => {
        clearInterval(this.set)
        }
    timer = (a, numwords) => {
        switch(a){
          case "random": 
                const l = this.props.refArray.length
                for(let x=0; x < numwords; x++){
                    let randomSpan = Math.floor(Math.random() * l)
                    try{
                        if(!this.props.refArray[randomSpan].current.classList.contains('ignore')){
                            this.props.refArray[randomSpan].current.classList.add('unblankedblurry')
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
            }
            break;
          case "showWordsInContext": 
              this.onClickPauseHandler()
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