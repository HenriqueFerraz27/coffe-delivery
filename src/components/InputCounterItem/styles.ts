import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'
import { Container } from '../../styles/components'

export const Header = styled(Container).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(20)};
  min-height: ${pxToRem(100)};

  h2 img {
    height: ${pxToRem(40)};
    transition: all 0.1s;

    &:hover {
      transform: scale(1.1);
    }
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
    a,
    button {
      min-height: ${pxToRem(38)};
    }
  }
`

export const Location = styled.li`
  transition: all 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  button {
    align-items: center;
    gap: ${pxToRem(4)};
    padding: 0 ${pxToRem(8)};
    color: ${({ theme }) => theme.color.brand.purple.tertiary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    border-radius: ${pxToRem(6)};
    background-color: ${({ theme }) => theme.color.brand.purple.primary};

    svg {
      color: ${({ theme }) => theme.color.brand.purple.secondary};
    }

    span {
      display: none;
    }
  }

  @media (min-width: 576px) {
    button span {
      display: initial;
    }
  }
`

export const Cart = styled.li`
  background-color: ${({ theme }) => theme.color.brand.yellow.primary};
  transition: all 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    padding: 0 ${pxToRem(8)};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.color.brand.yellow.secondary};
    }

    svg {
      color: ${({ theme }) => theme.color.brand.yellow.secondary};
    }
  }
`
