import styled from 'styled-components'

export const Painter = styled.div`
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

  input[type='color'] {
    margin-left: 10px;
  }

  button {
    margin: 0 5px;
  }
`
