import styled from 'styled-components'

export const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* border: 10px solid red; */

  &:active {
    cursor: grab;
  }
`
