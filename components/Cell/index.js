import React, { useState } from 'react'
import cx from 'classnames';

import './style.scss'

export default function Cell({ className, fillState }) {
  return (
    <div className={cx(
      className,
      "cell-main",
      {
        "cell--black": fillState === 0,
        "cell--white": fillState === 1
      }
    )}></div>
  )
}
