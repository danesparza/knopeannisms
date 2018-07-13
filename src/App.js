import React, { Component } from 'react';
import './App.css';

//  Import our adjectives and nouns:
import Personality from './words/Personality';
import Sensory from './words/Sensory';
import Nouns from './words/Nouns';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noun: Nouns.getRandomNoun(),
      sensoryAdjective1: Sensory.getRandomAdjective(),
      sensoryAdjective2: Sensory.getRandomAdjective(),
      personalityAdjective: Personality.getRandomAdjective()  
    };    
}

  render() {   

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You {this.state.sensoryAdjective1}, {this.state.personalityAdjective} and {this.state.sensoryAdjective2} {this.state.noun}</h1>

          <button onClick={this.refresh}>Another, please!</button>
        </header>
        <p className="App-intro">
          Compliments like Leslie Knope to Ann Perkins
        </p>
      </div>
    );
  }

  refresh = () => {
    this.setState({
      noun: Nouns.getRandomNoun(),
      sensoryAdjective1: Sensory.getRandomAdjective(),
      sensoryAdjective2: Sensory.getRandomAdjective(),
      personalityAdjective: Personality.getRandomAdjective()  
    });
  }
}

export default App;
