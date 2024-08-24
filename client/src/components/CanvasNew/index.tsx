import * as S from './styles'

interface ICanvasNew {}

const CanvasNew = ({}: ICanvasNew) => {
  return (
    <S.CanvasNew>
      <S.CanvasNewWrapper>
        <S.Canvas></S.Canvas>
      </S.CanvasNewWrapper>
    </S.CanvasNew>
  )
}

export default CanvasNew
