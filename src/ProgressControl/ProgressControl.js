import React from 'react'

const ProgressControl = ({ score, emitter }) => {
  let scoreInput

  return (
    <div className="ProgressControl">
      <label htmlFor="score">
        Rating:
      </label>
      <input
        id="score"
        type="number"
        step="1"
        value={score}
        min={0}
        max={100}
        ref={node => scoreInput = node}
        onChange={event => handleRatingChange(scoreInput.value)}
      />
      <button
        style={{ width: '2rem' }}
        onClick={event => handleRatingChange(score - 5)}
      >-</button>
      <button
        style={{ width: '2rem' }}
        onClick={event => handleRatingChange(score + 5)}
      >+</button>
    </div>
  )

  function handleRatingChange(newValue) {
    if (newValue < 0 || newValue > 100) return

    emitter.emit('PROGRESS_CONTROL_RATING_CHANGED', { score: newValue })
  }
}

export default ProgressControl
