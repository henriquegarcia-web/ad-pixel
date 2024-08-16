import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

export const MainScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  background-image: url('/bg_blueprint_gray.png');
  background-position: center;
  background-size: cover;
`

export const MainScreenWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
