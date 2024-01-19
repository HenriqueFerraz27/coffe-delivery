import * as S from './styles'
import * as Icon from 'phosphor-react'
import imageCoffee from '/banner/coffee.png'

export const Banner = () => {
  return (
    <S.Banner>
      <S.BannerContainer>
        <S.BannerWrapper>
          <div className='banner__img'>
            <img src={imageCoffee} alt='Coffee Delivery - Banner' />
          </div>

          <S.BannerContent>
            <S.TitleAndDescription>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </S.TitleAndDescription>

            <S.BannerList className='banner-list__1'>
              <li>
                <span>
                  <Icon.ShoppingCart weight='fill' />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span>
                  <Icon.Package weight='fill' />
                </span>
                Embalagem mantém o café intacto
              </li>
              <li>
                <span>
                  <Icon.Timer weight='fill' />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span>
                  <Icon.Coffee weight='fill' />
                </span>
                O café chega fresquinho até você
              </li>
            </S.BannerList>
          </S.BannerContent>
        </S.BannerWrapper>

        <S.BannerList className='banner-list__2'>
          <li>
            <span>
              <Icon.ShoppingCart weight='fill' />
            </span>
            Compra simples e segura
          </li>
          <li>
            <span>
              <Icon.Package weight='fill' />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li>
            <span>
              <Icon.Timer weight='fill' />
            </span>
            Entrega rápida e rastreada
          </li>
          <li>
            <span>
              <Icon.Coffee weight='fill' />
            </span>
            O café chega fresquinho até você
          </li>
        </S.BannerList>
      </S.BannerContainer>
    </S.Banner>
  )
}
