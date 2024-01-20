import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'
import { Container } from '../../styles/components/container'

export const Banner = styled.section`
  padding: ${pxToRem(90)} 0;
  background-image: url('/banner/background-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 600px) {
    background-image: url('/banner/background-desktop.png');
  }
`
export const BannerContainer = styled(Container)``

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: ${pxToRem(60)};

  .banner__img img {
    width: 100%;
  }

  @media (min-width: 425px) {
    .banner__img {
      display: flex;
      justify-content: center;

      img {
        max-width: 76%;
      }
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: initial;

    .banner__img {
      align-items: center;
      order: 1;

      img {
        max-width: initial;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 60% auto;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleAndDescription = styled.div`
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['4xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extraBold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  p {
    width: 90%;
    margin: auto;
    font-size: ${({ theme }) => theme.typography.size.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  @media (min-width: 600px) {
    text-align: left;

    p {
      width: initial;
      margin: initial;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      font-size: ${({ theme }) => theme.typography.size['5xl']};
    }
  }
`

export const BannerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(20)};
  margin-top: ${pxToRem(40)};

  &.banner-list__2 {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: ${pxToRem(12)};

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: ${pxToRem(32)};
      min-height: ${pxToRem(32)};
      border-radius: 100%;
      background-color: ${({ theme }) => theme.color.brand.purple.secondary};
    }

    svg {
      min-width: ${pxToRem(16)};
      min-height: ${pxToRem(16)};
      color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};
    }
  }

  @media (min-width: 450px) {
    li {
      font-size: ${({ theme }) => theme.typography.size.lg};
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: ${pxToRem(260)} auto;
    margin-top: ${pxToRem(20)};

    &.banner-list {
      &__1 {
        display: none;
      }

      &__2 {
        display: grid;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: ${pxToRem(20)} ${pxToRem(40)};
    margin-top: ${pxToRem(40)};

    &.banner-list {
      &__1 {
        display: grid;
      }

      &__2 {
        display: none;
      }
    }
  }
`
