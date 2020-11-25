import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from '../../components/ExampleStyledComponent';
import Text from '../../components/Text';
import Key from '../../components/Key'


class TextHider extends Component {
    constructor(props){
       super(props)
       this.set = {}

    }
    state = {
        refArray:[],
        ignore:[],
        childKey:[],
        text:[]
    }
    componentDidMount(){
        this.setState({
            refArray:this.props.refArray,
            ignore:this.props.ignore,
            text:this.props.text, 
            childKey:this.props.childKey          
        })

    }
    onClickHandler = (e) => { 
      let a = e.target.name
        this.set = setInterval(()=> {this.timer(a)},100)     
      }
    onClickPauseHandler = () => {
      clearInterval(this.set)
      }
    timer = (a) => {
      switch(a){
        case "random": const l = this.state.refArray.length
          let randomSpan = Math.floor(Math.random() * l)
          try{
            if(!this.state.refArray[randomSpan].current.classList.contains('ignore')){
              this.state.refArray[randomSpan].current.classList.add('hideText')
            }
          }
            catch(err){
              clearInterval(this.set)
             /// console.log(err.message)
            }       
          break;
        case "animate": const m = this.state.refArray.length
          let mrandomSpan = Math.floor(Math.random() * m)
          this.state.refArray[mrandomSpan].current.style = "font-weight:bold;color:red"
          setTimeout(() => {this.state.refArray[mrandomSpan].current.style = "color:white"},1000)
          break;
        case "sequential": this.state.refArray[this.curr++].current.style = "color:white"
          break;
        case "middle":if(this.midPointDown >= 0){
          this.state.refArray[this.midPoint++].current.style = "color:white"
          this.state.refArray[this.midPointDown--].current.style = "color:white"
          }
          break;
        case "reload": window.location.reload();
          break;
        case "showWordsInContext": 
            for(let z=0; z < this.state.refArray.length; z++){
              this.state.refArray[z].current.classList.remove('hideText')
              this.state.refArray[z].current.classList.add('greyed')
            }
            for(let y=0; y < this.state.ignore.length; y++){
              for(let x=0; x < this.state.ignore[y].length; x++){
  
                this.state.refArray[this.state.key[y]].current.classList.remove('hideText')
                this.state.refArray[this.state.key[y]].current.classList.remove('greyed')
                this.state.refArray[this.state.key[y]].current.classList.add('ignoreChunk')
                this.state.refArray[this.state.key[y]].current.classList.add('ignore')
                this.state.refArray[this.state.ignore[y][x]].current.classList.remove('hideText')
                this.state.refArray[this.state.ignore[y][x]].current.classList.remove('greyed')
                this.state.refArray[this.state.ignore[y][x]].current.classList.add('ignoreChunk')
              }
            }
        
          break;
        default:
      }
    
    }  
      onWordClickHandler = (e) =>{  
        if(this.props.enableWordClickHandler === undefined){
          return false
        }
        for(var x = 0; x < this.props.childKey.length; x++){             
          if(this.props.refArray[e.target.id].current.innerHTML === this.props.refArray[this.props.childKey[x]].current.innerHTML){      
            this.props.refArray[e.target.id].current.classList.add('ignore') 
            this.ignoreCounter++;
            if(this.ignoreCounter === 5){
              this.setState({autostop:"true"})
            }
          }
        }
      }
    
    render(){
        return(
            <div>

                <Col>
                    <h3>Text here</h3>
                    
                    <Text
                      text={ this.props.text }
                      textArray={ this.props.textArray }
                      refArray={ this.props.refArray }
                      className={ this.props.className }
                      onClick={ this.onWordClickHandler }
                      
                    />
                    
                    <hr/>
                    Key here
                    {/*<Key
                      textarray={ this.props.text}
                      answers={ this.props.childKey }
                    />*/}
                </Col>
            </div>
        )
    }
}


export default TextHider;
