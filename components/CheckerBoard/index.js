import React, { useMemo } from 'react'
import cx from 'classnames'

import Cell from '../Cell'
import './style.scss'

export default function CheckerBoard({ className, matrix, gridSize }) {

  return (
    <div className={cx(className, "checkerboard-main")}>
      {matrix.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell className="cell" {...cell} key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}
