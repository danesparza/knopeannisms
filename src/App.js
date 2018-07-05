import React, { Component } from 'react';
import './App.css';

//  Import our adjectives and nouns:
import Personality from './words/Personality';
import Sensory from './words/Sensory';
import Nouns from './words/Nouns';

class App extends Component {
  render() {

    //  Select a random noun:
    let nounIndex = Math.floor(Math.random()*Nouns.length);
    let noun = Nouns[nounIndex].toLowerCase();

    //  Select a random sensory adjective:
    let senseIndex1 = Math.floor(Math.random()*Sensory.length);
    let sensoryAdjective1 = Sensory[senseIndex1].toLowerCase();

    let senseIndex2 = Math.floor(Math.random()*Sensory.length);
    let sensoryAdjective2 = Sensory[senseIndex2].toLowerCase();

    //  Select a random personality adjective:
    let personalityIndex = Math.floor(Math.random()*Personality.length);
    let personalityAdjective = Personality[personalityIndex].toLowerCase();

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
