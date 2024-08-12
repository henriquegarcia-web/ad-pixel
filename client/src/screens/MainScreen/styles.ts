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

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const MainScreenWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
`

export const PixelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 400px;
  height: 250px;

  border: 1px solid red;
`

export const PixelsContainerHeader = styled.div`
  display: flex;

  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
`

export const PixelsContainerWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 8px;

  cursor: pointer;

  border: 2px solid rgb(30, 30, 30);
`
