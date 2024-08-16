import * as S from './styles'

import { Canvas, Header } from '@/components'

interface IMainScreen {}

const MainScreen = ({}: IMainScreen) => {
  return (
    <S.MainScreen>
      <Header />
      <S.MainScreenWrapper>
        <Canvas canvasHeight={400} canvasWidth={800} />
      </S.MainScreenWrapper>
    </S.MainScreen>
  )
}

export default MainScreen
