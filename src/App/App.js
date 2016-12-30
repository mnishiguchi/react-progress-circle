import React, { Component } from 'react';
import { EventEmitter }     from 'fbemitter';

import './App.css';

import ScoreBoard from '../ScoreBoard/ScoreBoard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scores: {
        walk    : 50,
        transit : 80,
        bicycle : 30,
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="h4">
            React Progress Circle component
          </h2>
        </div>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <ScoreBoard
            scores={this.state.scores}
            emitter={this._emitter}
          />
        </div>
      </div>
    );
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  componentWillMount() {
    this._subscribeEvents()
  }

  componentWillUnmount() {
    this._unsubscribeEvents()
  }


  // ---
  // PRIVATE METHODS
  // ---


  /**
   * Sets up an emitter and listens for events from children.
   */
  _subscribeEvents() {
    this._emitter = new EventEmitter()

    this._emitter.addListener('PROGRESS_CONTROL_SCORE_CHANGED', ({ score, type }) => {
      const scores = {...this.state.scores, [type]: score}
      this.setState({ scores })
    })
  }

  /**
   * Removes all the listeners that are registered on the emitter.
   */
  _unsubscribeEvents() {
    this._emitter.removeAllListeners()
  }
}

export default App;
