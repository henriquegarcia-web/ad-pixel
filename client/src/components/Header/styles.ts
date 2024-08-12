import styled from 'styled-components'
import { headerHeight } from '@/utils/styles/globals'

export const Header = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: ${headerHeight};

  background-color: rgba(0, 0, 0, 0.3);
`
