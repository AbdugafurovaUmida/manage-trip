import React from 'react'
import { Container } from '../../styled'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const SearchedPlaces = styled.div`
     margin-top:-100px;
     padding-top:70px;
     
`
const SearchedPlacesTitle = styled.h2`
     font-family: 'DM Sans';
     font-weight: bold;
     font-size: 48px;
     line-height: 70px;
     letter-spacing: -0.005em;
     color: ${(props) => props.theme.SearchedPlacesTitleColor};
     text-align:center;
     margin-bottom:12px;
`

const SearchedPlacesText = styled.p`
     font-family: 'Poppins';
     font-size: 16px;
     line-height: 24px;
     margin:0 auto;
     color: #84878B;
     font-weight: normal;
     max-width:593px;
     text-align:center;
`

const SearchedPlacesContent = styled.div`
    padding:65px 0px 82px 0px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
`

const SearchedPlacesCard = styled.div`
padding:28px 0px 25px 30px;
border: ${(props) => props.theme.SearchedPlacesCardBorder};
// background-color:transparent;
border-radius: 10px;
max-width:270px;
width:100%;
:hover{
    background-color:${(props) => props.theme.SearchedPlacesCardBg};
    box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
}
&:active{
    opacity:0.6;
}
`


const SearchedPlacesImg = styled.div`
border-radius:10px;
overflow:hidden;
margin-bottom:18px;
img{
    border-radius:10px;
}

`

const SearchedCardTitle = styled.h5`
font-weight: 500;
font-size: 24px;
margin-bottom:12px;
color:${(props) => props.theme.SearchedCardTitleColor} ;
`

const SearchedCardText = styled.p`
margin:0;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.SearchedCardTextColor} ;
`



const BestPLace = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <SearchedPlaces>
                <SearchedPlacesTitle>
                    {t('SearchedPlacesTitle')}
                </SearchedPlacesTitle>
                <SearchedPlacesText>
                    {t('SearchedPlacesText')}
                </SearchedPlacesText>
                <SearchedPlacesContent>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-1.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Batu, East Java</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-2.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Kuta</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-3.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Surabaya, East Java</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-4.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Malang, East Java</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-4.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Dieng, Central Java</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-5.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Nusa Dua, Lombok</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-2.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Bandung, West Java</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                    <SearchedPlacesCard>
                        <SearchedPlacesImg>
                            <img src="/assets/img/best-places-1.jpg" alt="best-places" />
                        </SearchedPlacesImg>
                        <SearchedCardTitle>Wakatobi, Sumatera</SearchedCardTitle>
                        <SearchedCardText>86 {`${t('Destinations')}`}</SearchedCardText>
                    </SearchedPlacesCard>
                </SearchedPlacesContent>
            </SearchedPlaces>
        </Container>

    )
}

export default BestPLace
