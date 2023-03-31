import React from 'react'
import './TimeSpent.scss';
const TimeSpent = ({totalTimeSpent}) => {
  return (
    <p className='time-spent'>
     Spent time on read: {totalTimeSpent} min
    </p>
  )
}

export default TimeSpent