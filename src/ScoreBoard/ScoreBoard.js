import React, { Component } from 'react';

import ProgressControl from '../ProgressControl/ProgressControl';
import ProgressCircle  from '../ProgressCircle/ProgressCircle';

class ScoreBoard extends Component {
  render() {
    return (
      <div className="ScoreBoard">
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
  // PRIVATE METHODS
  // ---


  _renderBicycleScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Bicycle"
          score={this.props.scores.bicycle}
        >
          <i className="fa fa-bicycle"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'bicycle'}
          score={this.props.scores.bicycle}
          emitter={this.props.emitter}
        />
      </div>
    )
  }

  _renderWalkScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Walk"
          score={this.props.scores.walk}
        >
          <i className="fa fa-blind"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'walk'}
          score={this.props.scores.walk}
          emitter={this.props.emitter}
        />
      </div>
    )
  }

  _renderTransitScore() {
    return (
      <div style={{ margin: '1.5rem 0' }}>
        <ProgressCircle
          label="Transit"
          score={this.props.scores.transit}
        >
          <i className="fa fa-bus"></i>
        </ProgressCircle>

        <br />

        <ProgressControl
          type={'transit'}
          score={this.props.scores.transit}
          emitter={this.props.emitter}
        />
      </div>
    )
  }
}

export default ScoreBoard;
