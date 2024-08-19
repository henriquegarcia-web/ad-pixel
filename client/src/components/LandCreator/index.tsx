import React, { useState } from 'react'
import * as S from './styles'

const INITIAL_GRID_SIZE = 4

interface ILandCreator {}

const imageOptions = [
  '/tile_plant_01.png',
  '/tile_plant_02.png',
  '/tile_plant_03.png',
  '/tile_plant_04.png',
  '/tile_plant_05.png',
  '/tile_plant_06.png',
  '/tile_plant_07.png',
  '/tile_plant_08.png',
  '/tile_plant_09.png',
  '/tile_plant_10.png',
  '/tile_plant_11.png'
]

const groundOptions = [
  '/tile_ground_01.png',
  '/tile_ground_02.png',
  '/tile_ground_03.png',
  '/tile_ground_04.png'
]

const LandCreator = ({}: ILandCreator) => {
  const [gridSize, setGridSize] = useState({
    rows: INITIAL_GRID_SIZE,
    cols: INITIAL_GRID_SIZE
  })
  const [grid, setGrid] = useState(
    Array.from({ length: INITIAL_GRID_SIZE }, () =>
      Array.from({ length: INITIAL_GRID_SIZE }, () => ({
        pixel: '',
        ground: groundOptions[Math.floor(Math.random() * groundOptions.length)]
      }))
    )
  )
  const [selectedImage, setSelectedImage] = useState(imageOptions[0])
  const [tool, setTool] = useState('brush')

  const handlePixelClick = (rowIdx: number, colIdx: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => row.map((cell) => ({ ...cell })))
      newGrid[rowIdx][colIdx].pixel = tool === 'brush' ? selectedImage : ''
      return newGrid
    })
  }

  const handleSizeChange = (dimension: 'rows' | 'cols', value: number) => {
    const newSize = { ...gridSize, [dimension]: value }
    setGridSize(newSize)

    setGrid((prevGrid) => {
      const newGrid = Array.from({ length: newSize.rows }, (_, rowIdx) =>
        Array.from({ length: newSize.cols }, (_, colIdx) => {
          if (rowIdx < prevGrid.length && colIdx < prevGrid[rowIdx].length) {
            return { ...prevGrid[rowIdx][colIdx] }
          } else {
            return {
              pixel: '',
              ground:
                groundOptions[Math.floor(Math.random() * groundOptions.length)]
            }
          }
        })
      )

      return newGrid
    })
  }

  return (
    <S.LandCreator>
      {/* ------------------------------------------ MENU ----- */}

      <S.LandCreatorMenu>
        <S.MenuWrapper>
          <S.MenuWrapperLabel>Tamanho</S.MenuWrapperLabel>
          <S.MenuWrapperContent>
            <button
              onClick={() => {
                handleSizeChange('rows', 4)
                handleSizeChange('cols', 4)
              }}
            >
              Pequeno
            </button>
            <button
              onClick={() => {
                handleSizeChange('rows', 8)
                handleSizeChange('cols', 8)
              }}
            >
              Grande
            </button>
            {/* <button onClick={() => {

          }}>Médio</button>
          <button onClick={() => {

          }}>Grande</button> */}
          </S.MenuWrapperContent>
          {/* <label>Rows: </label>
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
          /> */}
        </S.MenuWrapper>
        <S.MenuWrapper>
          <S.MenuWrapperLabel>Ativos</S.MenuWrapperLabel>
          <S.MenuWrapperContent>
            <button onClick={() => setTool('brush')}>Brush</button>
            <button onClick={() => setTool('eraser')}>Eraser</button>
            <div>
              {imageOptions.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Option ${index}`}
                  style={{
                    border: selectedImage === image ? '2px solid blue' : 'none',
                    cursor: 'pointer',
                    margin: '0 5px',
                    width: '30px',
                    height: '30px'
                  }}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </S.MenuWrapperContent>
        </S.MenuWrapper>
      </S.LandCreatorMenu>

      {/* ------------------------------------------ GRID ----- */}

      <S.LandCreatorGrid>
        <S.LandCreatorLand cols={gridSize.cols}>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <S.Tile
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handlePixelClick(rowIndex, colIndex)}
                style={{ backgroundImage: `url(${cell.ground})` }}
              >
                {cell.pixel && <img src={cell.pixel} alt="" />}
              </S.Tile>
            ))
          )}
        </S.LandCreatorLand>
      </S.LandCreatorGrid>
    </S.LandCreator>
  )
}

export default LandCreator
