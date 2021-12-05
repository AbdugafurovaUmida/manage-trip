import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styled'
import './TopTour.css'
import 'swiper/swiper.min.css';
import SwiperCore , { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';



const Top = styled.section`
padding:70px 0;
`

const TopTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #141416;
margin-bottom:12px;
`


const TopText = styled.h2`
font-family: 'Poppins';
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #777E90;
margin:0;
`

const TopTourContent = styled.div`
margin-top:61px;
display:flex;
gap:30px;
`

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
SwiperCore.use([Autoplay]);

const TopTour = () => {
    return (
        <Container>
            <Top>
                <TopTitle>
                    Top Tour
                </TopTitle>
                <TopText>
                    Keep calm &#38; travel on
                </TopText>
                <TopTourContent>
                <Swiper
             modules={[Autoplay]}
              grabCursor={true}
               spaceBetween={30} 
               slidesPerView={3} 
               loop autoplay={{ delay: 3000, disableOnInteraction: false }}
               >
                <SwiperSlide >
                    <TopTourCard>
                        <img style={{ borderRadius: '16px' }} src="/assets/img/top-tour.jpg" alt="top-tour" />
                        <TopTourCity>
                            Japan
                        </TopTourCity>
                        <TopTourInfo>
                            <TopTourName>
                                Japan
                            </TopTourName>
                            <TopTourText>
                                10 Popular Places
                            </TopTourText>
                        </TopTourInfo>
                    </TopTourCard>
                    
                    </SwiperSlide >
                    <SwiperSlide >
                    <TopTourCard>
                        <img style={{ borderRadius: '16px' }} src="/assets/img/top-tour.jpg" alt="top-tour" />
                        <TopTourCity>
                            Japan
                        </TopTourCity>
                        <TopTourInfo>
                            <TopTourName>
                                Japan
                            </TopTourName>
                            <TopTourText>
                                10 Popular Places
                            </TopTourText>
                        </TopTourInfo>
                    </TopTourCard>
                    </SwiperSlide >
                    <SwiperSlide >
                    <TopTourCard>
                        <img style={{ borderRadius: '16px' }} src="/assets/img/top-tour.jpg" alt="top-tour" />
                        <TopTourCity>
                            Japan
                        </TopTourCity>
                        <TopTourInfo>
                            <TopTourName>
                                Japan
                            </TopTourName>
                            <TopTourText>
                                10 Popular Places
                            </TopTourText>
                        </TopTourInfo>
                    </TopTourCard>
                    </SwiperSlide>
                    <SwiperSlide >
                    <TopTourCard>
                        <img style={{ borderRadius: '16px' }} src="/assets/img/top-tour.jpg" alt="top-tour" />
                        <TopTourCity>
                            Japan
                        </TopTourCity>
                        <TopTourInfo>
                            <TopTourName>
                                Japan
                            </TopTourName>
                            <TopTourText>
                                10 Popular Places
                            </TopTourText>
                        </TopTourInfo>
                    </TopTourCard>
                    </SwiperSlide>
                    <SwiperSlide >
                    <TopTourCard>
                        <img style={{ borderRadius: '16px' }} src="/assets/img/top-tour.jpg" alt="top-tour" />
                        <TopTourCity>
                            Japan
                        </TopTourCity>
                        <TopTourInfo>
                            <TopTourName>
                                Japan
                            </TopTourName>
                            <TopTourText>
                                10 Popular Places
                            </TopTourText>
                        </TopTourInfo>
                    </TopTourCard>
                    </SwiperSlide>
                    </Swiper>
                </TopTourContent>
            </Top>
        </Container>
    )
}

export default TopTour
