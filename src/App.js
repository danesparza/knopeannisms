import React, { Component } from 'react';
import './App.css';

//  Import our adjectives and nouns:
import Personality from './words/Personality';
import Sensory from './words/Sensory';
import Nouns from './words/Nouns';

class App extends Component {
  render() {

    //  Select a random noun:
    let noun = Nouns.getRandomNoun();

    //  Select a random sensory adjective:
    let sensoryAdjective1 = Sensory.getRandomAdjective();
    let sensoryAdjective2 = Sensory.getRandomAdjective();

    //  Select a random personality adjective:
    let personalityAdjective = Personality.getRandomAdjective();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You {sensoryAdjective1}, {personalityAdjective} and {sensoryAdjective2} {noun}</h1>
        </header>
        <p className="App-intro">
          Compliments like Leslie Knope to Ann Perkins
        </p>
      </div>
    );
  }
}

export default App;
