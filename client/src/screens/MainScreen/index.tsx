import * as S from './styles'

import { Canvas, Header } from '@/components'

interface IMainScreen {}

const MainScreen = ({}: IMainScreen) => {
  return (
    <S.MainScreen>
      <Header />
      <S.MainScreenWrapper>
        <Canvas canvasHeight={250} canvasWidth={500} />
      </S.MainScreenWrapper>
    </S.MainScreen>
  )
}

export default MainScreen
