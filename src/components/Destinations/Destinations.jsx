import { t } from 'i18next'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styled'
import { useTranslation } from 'react-i18next'

import './Destinations.css'


const DestinationFeature = styled.section`

`
const DestinationFeatureTitle = styled.h2`
    font-family: 'DM Sans';
    font-size: 48px;
    line-height: 70px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.DestinationFeatureTitleColor};
    font-weight: bold;
    margin-bottom:12px;
`

const DestinationFeatureText = styled.p`
   font-family: 'Poppins';
   font-size: 16px;
   line-height: 24px;
   color: ${(props) => props.theme.DestinationFeatureTextColor};
   font-weight: normal;
   margin:0;
`

const DestinationContent = styled.div`
display:flex;
gap:30px;
margin-top:37px;
`

const ContentLeft = styled.div`
display:inline-block;
display:flex;
flex-wrap:wrap;
gap:30px;

`
const ContentRight = styled.div`
display:inline-block;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
gap:30px;
`

const CardImg = styled.img`
    border-radius: 18px;

`

const CardBodyLarge = styled.div`
position:absolute;
left:30px;
bottom:15px;
z-index:1000;
div{
    display:flex;
}
`

const CardBodyMiddle = styled.div`
position:absolute;
left:40px;
bottom:19px;
z-index:1000;
div{
    display:flex;
}
`

const CardBodySmall = styled.div`
position:absolute;
left:20px;
bottom:14px;
z-index:1000;
span{

}
div{
    display:flex;
}
`

const Card = styled.div`
    position:relative;
    font-family: 'DM Sans';
    span{
        position:absolute;
        left:20px;
        top:20px;
        z-index:10;
    }
    &:after{
        content:'';
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-image: linear-gradient(0.63deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0) 39.64%);
        z-index:4;
        border-radius: 18px;
    }

`

const CardBodyTitleLarge = styled.h5`
font-weight: bold;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
`

const CardBodyTitleMiddle = styled.h5`
font-weight: bold;
font-size: 24px;
line-height: 24px;
color: #FFFFFF;
`

const CardBodyTitleSmall = styled.h5`
font-weight: bold;
font-size: 18px;
line-height: 20px;
color: #FFFFFF;
`

const CardAvatorLarge = styled.div`
width:30px;
height:26px;
border-radius:50%;
margin-right:5px;
img{
    border-radius:50%;
    object-fit:cover;
    object-position:center; 
}
`

const CardAvatorMiddle = styled.div`
width:20px;
height:20px;
border-radius:50%;
margin-right:8px;
img{
    border-radius:50%;
    object-fit:cover;
    object-position:center; 
}
`

const CardAvatorSmall = styled.div`
width:14px;
height:14px;
border-radius:50%;
margin-right:7px;
img{
    border-radius:50%;
    object-fit:cover;
    object-position:center; 
}
`

const CardInfoLarge = styled.div`
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
`

const CardInfoMiddle = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
`

const CardInfoSmall = styled.div`
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #FFFFFF;
`
const CardRetLarge =styled.span`
    padding:2px 20px;
    background-color:white;
    color: #FF543D;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
    font-size:20px;
    font-weight: bold;
    border-radius: 20px;

`

const CardRetMiddle =styled.span`
    padding:2px 18px;
    background-color:white;
    color: #FF543D;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
    font-size:18px;
    font-weight: bold;
    border-radius: 20px;

`

const CardRetSmall =styled.span`
    padding:1px 14px;
    background-color:white;
    color: #FF543D;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
    font-size:12px;
    font-weight: bold;
    border-radius: 20px;

`


const Destinations = () => {


    const { t } = useTranslation()

    return (
        <Container>
            <DestinationFeature>
                <DestinationFeatureTitle>
                    {t('DestinationFeatureTitle')}
                </DestinationFeatureTitle>
                <DestinationFeatureText>
                    {t('DestinationFeatureText')}    
                </DestinationFeatureText>
                <DestinationContent>
                    <ContentLeft>
                        <Card style={{ width: '870px', height: '280px' }}>
                        <CardRetLarge>3.5</CardRetLarge>
                            <CardImg src='/assets/img/image(1).jpg' alt='Barcelona-Tour'></CardImg>
                            <CardBodyLarge> 
                                <CardBodyTitleLarge>
                                    {t('Barcelona-Tour')}
                                </CardBodyTitleLarge>
                                <div>
                                    <CardAvatorLarge>
                                        <img src="/assets/img/avator-large.jpg" alt="avator" />
                                    </CardAvatorLarge>
                                    <CardInfoLarge>
                                        196 {`${t('Activities')}`}
                                    </CardInfoLarge>
                                </div>
                            </CardBodyLarge>
                        </Card>
                        <Card style={{ width: '408px', height: '408px', marginRight: '20px' }}>
                        <CardRetMiddle>3.5</CardRetMiddle>
                            <CardImg src='/assets/img/image(3).jpg' alt='LOndon-United-States'></CardImg>
                            <CardBodyMiddle>
                               
                                <CardBodyTitleMiddle>
                                    {t('London-United-State')}
                                </CardBodyTitleMiddle>
                                <div>
                                    <CardAvatorMiddle>
                                        <img src="/assets/img/avator-small.jpg" alt="avator" />
                                    </CardAvatorMiddle>
                                    <CardInfoMiddle>
                                        196 {`${t('Activities')}`}
                                    </CardInfoMiddle>
                                </div>
                            </CardBodyMiddle>
                        </Card>
                        <Card style={{ width: '408px', height: '408px',marginLeft:'3px' }}>
                        <CardRetMiddle>3.5</CardRetMiddle>
                            <CardImg src='/assets/img/image(4).jpg' alt='Australia-Tour'></CardImg>
                            <CardBodyMiddle>
                               
                                <CardBodyTitleMiddle>
                                    {t('Australia-Tour')}
                                </CardBodyTitleMiddle>
                                <div>
                                    <CardAvatorMiddle>
                                        <img src="/assets/img/avator-small.jpg" alt="avator" />
                                    </CardAvatorMiddle>
                                    <CardInfoMiddle>
                                        196 {`${t('Activities')}`}
                                    </CardInfoMiddle>
                                </div>
                            </CardBodyMiddle>
                        </Card>
                    </ContentLeft>
                    <ContentRight>
                        <Card style={{ width: '270px', height: '220px' }}>
                        <CardRetSmall>3.5</CardRetSmall>
                            <CardImg src='/assets/img/image(2).jpg' alt='Australia-Tour'></CardImg>
                            <CardBodySmall>
                               
                                <CardBodyTitleSmall>
                                {t('Australia-Tour')}
                                </CardBodyTitleSmall>
                                <div>
                                    <CardAvatorSmall>
                                        <img src="/assets/img/avator-small.jpg" alt="avator" />
                                    </CardAvatorSmall>
                                    <CardInfoSmall>
                                        196 {`${t('Activities')}`}
                                    </CardInfoSmall>
                                </div>
                            </CardBodySmall>
                        </Card>
                        <Card style={{ width: '270px', height: '220px' }}>
                        <CardRetSmall>3.5</CardRetSmall>
                            <CardImg src='/assets/img/image(5).jpg' alt='Japan-Tour'></CardImg>
                            <CardBodySmall>
                                
                                <CardBodyTitleSmall>
                                   {t('Japan-Tour')}
                                </CardBodyTitleSmall>
                                <div>
                                    <CardAvatorSmall>
                                        <img src="/assets/img/avator-small.jpg" alt="avator" />
                                    </CardAvatorSmall>
                                    <CardInfoSmall>
                                        196 {`${t('Activities')}`}
                                    </CardInfoSmall>
                                </div>
                            </CardBodySmall>
                        </Card>
                        <Card style={{ width: '270px', height: '220px' }}>
                        <CardRetSmall>3.5</CardRetSmall>
                            <CardImg src='/assets/img/image(6).jpg' alt='Japan-Tour'></CardImg>
                            <CardBodySmall>
                               
                                <CardBodyTitleSmall>
                                {t('Japan-Tour')}
                                </CardBodyTitleSmall>
                                <div>
                                    <CardAvatorSmall>
                                        <img src="/assets/img/avator-small.jpg" alt="avator" />
                                    </CardAvatorSmall>
                                    <CardInfoSmall>
                                        196 {`${t('Activities')}`}
                                    </CardInfoSmall>
                                </div>
                            </CardBodySmall>
                        </Card>
                    </ContentRight>
                </DestinationContent>
            </DestinationFeature>
        </Container>
    )
}

export default Destinations
