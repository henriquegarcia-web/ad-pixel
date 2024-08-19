import styled from 'styled-components'

export const LandCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-bottom: 10px;
  }

  input[type='number'] {
    width: 50px;
    margin: 0 5px;
  }

  button {
    margin: 0 5px;
  }

  img {
    cursor: pointer;
    margin: 0 5px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  border: 2px solid red;
`

// =============================================================== MENU

export const LandCreatorMenu = styled.div`
  display: flex;
`

export const MenuWrapper = styled.div`
  display: flex;
`

export const MenuWrapperLabel = styled.label`
  display: flex;
`

export const MenuWrapperContent = styled.div`
  display: flex;
`

// =============================================================== GRID

export const LandCreatorGrid = styled.label`
  display: flex;
`

export const LandCreatorLand = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 30px)`};
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 30px;
  height: 30px;
  background-size: cover;

  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  img {
    width: fit-content;
    height: fit-content;
    transform: scale(1.5);
    margin-bottom: 12px;

    /* border-bottom: 1px solid red; */
  }
`
