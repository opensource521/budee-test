import React, { useEffect, useMemo, useState } from 'react'

import CheckerBoard from '../CheckerBoard'
import './style.scss'

const DEFAULT_SIZE = 8

const generateMatrix = (gridSize) => {
  let matrix = [];

  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j< gridSize; j++) {
      row.push({
        fillState: (j + i) % 2 === 0 ? 0 : 1
      })
    }

    matrix.push(row);
  }

  return matrix
}

export default function MainContainer() {
  const [inputVal, setInputVal] = useState(DEFAULT_SIZE)
  const [gridSize, setGridSize] = useState(DEFAULT_SIZE)

  const matrix = useMemo(() => generateMatrix(gridSize), [gridSize])

  const handleChange = e => {
    const newValue = e.target.value
    setInputVal(newValue)

    if (newValue >=2 && newValue <=8) {
      setGridSize(newValue)
    }
  }

  return (
    <div className="main-container">
      <div className="left-pane">
        <div className="input-wrapper">
          <label>Size:</label>
          <input type="number" value={inputVal} onChange={handleChange} />
        </div>
      </div>

      <CheckerBoard gridSize={gridSize} matrix={matrix} className="board-pane" />

      <div className="right-pane" />
    </div>
  )
}
