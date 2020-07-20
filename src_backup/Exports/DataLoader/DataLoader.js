import React, { Component } from 'react';
import database from '../../../src/fire';

class DataLoader extends Component{
  constructor(props){
    super()
    this.exerciseContent = {}
    this.answerKey = []
  }

  getData(){
    const myf = database.ref('/userDB/').once('value').then((snap) => {
      if(snap.val()){   
        this.exerciseContent = snap.val()
        return this.exerciseContent
      }
    })
      return myf  
  }
  chooseText(text){
      return text
  } 
}

export default DataLoader;
