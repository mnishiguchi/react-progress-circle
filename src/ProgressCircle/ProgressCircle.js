import React from 'react'
import classNames from 'classnames'

import './ProgressCircle.css'

const ProgressCircle = () => {
  const { rating } = this.props

  const progressClassName = classNames({
    'rating-progress js-rating-progress': true,
    'under-30'                          : (rating <= .3),
    'under-70'                          : (rating <= .7 && rating > .3),
  })

  const progressStyle = {
    strokeDashoffset: (1 - rating) * 100
  }

  return (
    <div className="ProgressCircle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
        <circle
          cx="16" cy="16" r="15.9155"
          className="rating-progress-background"
        />
        <circle
          cx="16" cy="16" r="15.9155"
          className={progressClassName}
          style={progressStyle}
        />
      </svg>
      <div className="ratingText">
        {rating * 100}
      </div>
    </div>
  )
}

export default ProgressCircle
