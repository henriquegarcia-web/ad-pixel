import React, { useState } from 'react'
import * as S from './styles'

interface IPainter {}

const Painter = ({}: IPainter) => {
  const [gridSize, setGridSize] = useState({ rows: 16, cols: 16 })
  const [grid, setGrid] = useState(
    Array.from({ length: 16 }, () => Array(16).fill(''))
  )
  const [brushColor, setBrushColor] = useState('#000000')
  const [tool, setTool] = useState('brush')

  const handlePixelClick = (rowIdx: number, colIdx: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row])
      newGrid[rowIdx][colIdx] = tool === 'brush' ? brushColor : ''
      return newGrid
    })
  }

  const handleSizeChange = (dimension: 'rows' | 'cols', value: number) => {
    const newSize = { ...gridSize, [dimension]: value }
    setGridSize(newSize)
    setGrid(
      Array.from({ length: newSize.rows }, () => Array(newSize.cols).fill(''))
    )
  }

  return (
    <S.Painter>
      <div>
        <label>Rows: </label>
        <input
          type="number"
          value={gridSize.rows}
          onChange={(e) => handleSizeChange('rows', Number(e.target.value))}
          max={16}
          min={1}
        />
        <label>Cols: </label>
        <input
          type="number"
          value={gridSize.cols}
          onChange={(e) => handleSizeChange('cols', Number(e.target.value))}
          max={16}
          min={1}
        />
      </div>
      <div>
        <button onClick={() => setTool('brush')}>Brush</button>
        <button onClick={() => setTool('eraser')}>Eraser</button>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize.cols}, 30px)`,
          borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handlePixelClick(rowIndex, colIndex)}
              style={{
                width: 30,
                height: 30,
                backgroundColor: cell,
                borderRight: '1px solid rgba(255, 255, 255, 0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
              }}
            />
          ))
        )}
      </div>
    </S.Painter>
  )
}

export default Painter
