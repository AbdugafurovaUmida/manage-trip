import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const TopTourCard = styled.div`
position:relative;
:after{
    background-image: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
    border-radius: 16px;
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:7;
    // margin-right:20px;
}

img{
    z-index:2;
}
div{
    position:absolute;
    left:35px;
    bottom:34px;
}
`

const TopTourName = styled.h4`
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #FCFCFD;
text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);

`

const TopTourText = styled.p`
font-family: 'Poppins';
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #FCFCFD;
opacity: 0.9;

`

const TopTourCity = styled.button`
background: rgba(20, 20, 22, 0.2);
backdrop-filter: blur(4px);
border-radius: 50px;
border:transparent;
padding:12px 28px;
font-family: 'DM Sans';
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #E9EBF3;
position:absolute;
top:30px;
left:35px;
z-index:666;
`
const TopTourInfo = styled.div`
z-index:10;
`

const TopTourCards = ({tourobj}) => {
    const { t } = useTranslation()
    return (
        <>
        <TopTourCard >
        <img style={{ borderRadius: '16px' }} src={`/assets/img/${tourobj.photo}`} alt="top-tour" />
        <TopTourCity>
        {tourobj.name}
            {/* Japan */}
        </TopTourCity>
        <TopTourInfo>
            <TopTourName>
                {/* Japan */}
                {tourobj.country}
            </TopTourName>
            <TopTourText>
            {tourobj.place_count} {`${t('Popular-Places')}`}
            </TopTourText>
        </TopTourInfo>
    </TopTourCard>
    </>
    )
}

export default TopTourCards
