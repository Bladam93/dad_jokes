import './App.css';
import React, { Component } from "react";
import jokes from "./Data.js";

class App extends Component {
  state = {
    jokes: [...jokes],
    currentJoke: null,
  };

  componentDidMount() {
    this.displayRandomJoke();
  }

  displayRandomJoke = () => {
    const { jokes } = this.state;

    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const selectedJoke = jokes[randomIndex];

      const updatedJokes = jokes.filter((joke) => joke.id !== selectedJoke.id);

      this.setState({
        jokes: updatedJokes,
        currentJoke: selectedJoke,
      });
    } else {
      this.setState({
        currentJoke: null,
      });
    }
  };

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    const { currentJoke } = this.state;

    return (
      <div className="App">
        <h1 className='fancy'>Wooden face</h1>
        {currentJoke && (
          <div>
            {currentJoke.text.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))} 
          </div>
        )}
        {!currentJoke && <p>Egyelőre ennyi.</p>}
        <button className="btn" onClick={currentJoke ? this.displayRandomJoke : this.reloadPage}>
          {currentJoke ? "Új vicc" : "Újra"}
        </button>
      </div>
    );
  }
}

export default App;
