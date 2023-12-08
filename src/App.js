import './App.css';
import jokes from "./Data.js";






import React, { Component } from "react";



class App extends Component {
  state = {
    joke: jokes[0],
  };

  handleClick = () => {
    this.setState({
      joke: jokes[Math.floor(Math.random() * jokes.length)],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dad Jokes</h1>
        <p>{this.state.joke.text}</p>
        <button className="btn" onClick={this.handleClick}>Új vicc</button>
      </div>
    );
  }
}

export default App;
