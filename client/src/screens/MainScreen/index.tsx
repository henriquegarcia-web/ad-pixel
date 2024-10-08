import { useEffect, useRef } from 'react'

import * as S from './styles'

import {
  CanvasNew,
  CanvasTest,
  Header,
  LandCreator,
  Painter,
  PainterImage
} from '@/components'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

interface IMainScreen {}

const MainScreen = ({}: IMainScreen) => {
  // const transformWrapperRef = useRef<ReactZoomPanPinchContentRef>(null)

  return (
    <S.MainScreen>
      <Header />
      <S.MainScreenWrapper>
        {/* <Painter /> */}
        {/* <PainterImage /> */}
        {/* <LandCreator /> */}
        <CanvasNew />

        {/* <TransformWrapper
          initialPositionX={-250}
          initialPositionY={100}
          minScale={1}
          maxScale={50}
          initialScale={1}
          wheel={{ step: 0.4 }}
          limitToBounds={false}
          // ref={transformWrapperRef}
          smooth={true}
        >
          {({ zoomIn, zoomOut, resetTransform, centerView }) => (
            <TransformComponent
              wrapperStyle={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
                // border: '2px solid red'
              }}
              contentStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black'
              }}
            >
              <CanvasNew />
            </TransformComponent>
          )}
        </TransformWrapper> */}
      </S.MainScreenWrapper>
    </S.MainScreen>
  )
}

export default MainScreen
