import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Container = styled.div`
  max-width: ${pxToRem(768)};
  width: 86%;
  margin: auto;
`

export const Header = styled(Container).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${pxToRem(100)};

  h1 img {
    height: ${pxToRem(40)};
  }

  nav ul {
    display: flex;
    gap: ${pxToRem(12)};

    li {
      border-radius: ${pxToRem(6)};
    }

    svg {
      width: ${pxToRem(22)};
      height: ${pxToRem(22)};
    }

    input,
    a {
      min-height: ${pxToRem(38)};
    }
  }
`

export const Location = styled.li`
  position: relative;
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.brand.purple.primary};

  svg {
    position: absolute;
    top: 50%;
    margin-left: ${pxToRem(8)};
    color: ${({ theme }) => theme.color.brand.purple.secondary};
    transform: translateY(-50%);
  }

  input {
    width: ${pxToRem(190)};
    padding-left: ${pxToRem(36)};
    padding-right: ${pxToRem(8)};
    color: ${({ theme }) => theme.color.brand.purple.tertiary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    border: none;
    border-radius: ${pxToRem(6)};
    background-color: transparent;
  }
`

export const Cart = styled.li`
  padding: 0 ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.brand.yellow.primary};

  svg {
    color: ${({ theme }) => theme.color.brand.yellow.secondary};
  }
`
