import React, { Component } from 'react';
import { EventEmitter }     from 'fbemitter';

import './App.css';

import ProgressControl from '../ProgressControl/ProgressControl';
import ProgressCircle  from '../ProgressCircle/ProgressCircle';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scores: {
        bicycle : 30,
        walk    : 50,
        transit   : 80,
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

        <div className="row">
          <div className="col-sm-4">
            {this._renderWalkScore()}
          </div>
          <div className="col-sm-4">
            {this._renderTransitScore()}
          </div>
          <div className="col-sm-4">
            {this._renderBicycleScore()}
          </div>
        </div>
      </div>
    );
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  componentWillMount() {
    this._listenForChildren()
  }

  componentWillUnmount() {
    this._unlistenForChildren()
  }


  // ---
  // PRIVATE METHODS
  // ---


  _renderBicycleScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Bicycle"
          score={this.state.scores.bicycle}
        >
          <i className="fa fa-bicycle"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'bicycle'}
          score={this.state.scores.bicycle}
          emitter={this._emitter}
        />
      </div>
    )
  }

  _renderWalkScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Walk"
          score={this.state.scores.walk}
        >
          <i className="fa fa-blind"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'walk'}
          score={this.state.scores.walk}
          emitter={this._emitter}
        />
      </div>
    )
  }

  _renderTransitScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Transit"
          score={this.state.scores.transit}
        >
          <i className="fa fa-bus"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'transit'}
          score={this.state.scores.transit}
          emitter={this._emitter}
        />
      </div>
    )
  }

  /**
   * Sets up an emitter and listens for events from children.
   */
  _listenForChildren() {
    this._emitter = new EventEmitter()

    this._emitter.addListener('PROGRESS_CONTROL_SCORE_CHANGED', ({ score, type }) => {
      const scores = {...this.state.scores, [type]: score}
      this.setState({ scores })
    })
  }

  /**
   * Removes all the listeners that are registered on the emitter.
   */
  _unlistenForChildren() {
    this._emitter.removeAllListeners()
  }
}

export default App;
