import * as S from './styles'

import { stickersData } from '@/data/stickers'

interface ICanvasTest {}

const CanvasTest: React.FC<ICanvasTest> = () => {
  return (
    <S.CanvasWrapper>
      {stickersData.map((sticker) => (
        <S.StickerComponent
          key={sticker.id}
          style={{
            top: sticker.position.y,
            left: sticker.position.x,
            width: sticker.position.width,
            height: sticker.position.height
          }}
        >
          {sticker.colorData.map((color, index) => (
            <S.Pixel key={index} style={{ backgroundColor: color }} />
          ))}
        </S.StickerComponent>
      ))}
    </S.CanvasWrapper>
  )
}

export default CanvasTest
