import styled from 'styled-components'

export const CanvasTest = styled.div`
  display: flex;
  width: 500px;
  height: 500px;

  background-color: white;
`

export const CanvasWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: white;
`

export const StickerComponent = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1px);
  grid-template-rows: repeat(auto-fill, 1px);
`

export const Pixel = styled.div`
  width: 1px;
  height: 1px;
`
