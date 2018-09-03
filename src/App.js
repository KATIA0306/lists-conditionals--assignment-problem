import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

    state = {
      userInput: ''
    }

    changeUserInputHandler = (event) => {
      this.setState({userInput: event.target.value})
    }

    deleteCharHandler = (index) => {
      let text = this.state.userInput.split('');
      text.splice(index, 1);
      let changedText = text.join('');
      this.setState({userInput: changedText});
    }

    render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
      character = {ch} 
      key = {index}
      clicked = {() => this.deleteCharHandler(index)}/>
    })

    return (
      
      <div className="App">
        <input type = "text" onChange = {this.changeUserInputHandler} value = {this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
