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
`

// =============================================================== MENU

// export const Tile = styled.div`
//   display: flex;
// `

// =============================================================== GRID

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
