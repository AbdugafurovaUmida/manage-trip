import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styled';
import ReactStars from "react-rating-stars-component";
import { TiLocationOutline } from "react-icons/ti";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import 'swiper/swiper.min.css';
// import SwiperCore , { Autoplay } from 'swiper';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



const Explore = styled.section`
padding-bottom:70px;

`

const ExploreTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #141416;

`

const ExploreText = styled.p`
font-family: 'Poppins';
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
margin-bottom:0;
`
const ExploreContent = styled.div`
margin-top:49px;
display:flex;
gap:30px;
`

const ExploreCard = styled.div`
padding:14px 14px 21px 14px;
background: #FFFFFF;
border: 1px solid #E7ECF3;
border-radius: 20px;
font-family: 'DM Sans';
`

const ExploreImg = styled.div`
`
const ExploreRet = styled.div`
display:flex;
align-items:center;
margin:20px 0px 12px 0px;
small{
    color: #84878B;
}
`

const ExploreCardTitle = styled.h5`
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #3B3E44;
display:inline-block;
margin-bottom:0;
`

const ExploreCardPrice = styled.span`
padding:3px 10px 4px 10px;
// margin-left:35px;
background-color: rgba(49, 107, 255, 0.2);
border-radius: 6px;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;

`

const ExploreDistance = styled.div`
margin:9px 0px 7px 0px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const ExploreLocation = styled.div`
margin-top:8px;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #84878B;
span{
    color: #B1B5C4;
    font-size:18px;
    margin-right:5px;
}
`

const ExploreRooms = styled.div`
margin-top:8px;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #84878B;
span{
    color: #B1B5C4;
    margin-right:8px;
    font-size:16px;
}
`

const ExploreComforts = styled.div`
display:flex;
justify-content:space-between;
`

SwiperCore.use([Pagination, Navigation]);

const ExploreWorld = () => {


    return (
        <Container>
            <Explore>
                <ExploreTitle>Explore The World</ExploreTitle>
                <ExploreText>10,788 beautiful places to go</ExploreText>
                <ExploreContent>
                    <Swiper
                        grabCursor={true}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        <SwiperSlide >
                            <ExploreCard>
                                <ExploreImg>
                                    <img src="/assets/img/explore.png" alt="explore-world" />
                                </ExploreImg>
                                <ExploreRet>
                                    <ReactStars
                                        count={1}
                                        // onChange={ratingChanged}
                                        size={24}
                                        color="#e0a433"
                                    />
                                    <span>4.91<small> (147)</small></span>
                                </ExploreRet>
                                <ExploreComforts>
                                    <ExploreCardTitle>Comfort Space</ExploreCardTitle>
                                    <ExploreCardPrice>$210</ExploreCardPrice>
                                </ExploreComforts>
                                <ExploreDistance>1.2 km to Town Center</ExploreDistance>
                                <ExploreLocation><span><TiLocationOutline /></span>Turkey, Mamaris</ExploreLocation>
                                <ExploreRooms><span><HiOutlineOfficeBuilding /></span>Rooms available: 375</ExploreRooms>
                            </ExploreCard>
                        </SwiperSlide>
                        <SwiperSlide >
                            <ExploreCard>
                                <ExploreImg>
                                    <img src="/assets/img/explore.png" alt="explore-world" />
                                </ExploreImg>
                                <ExploreRet>
                                    <ReactStars
                                        count={1}
                                        // onChange={ratingChanged}
                                        size={24}
                                        color="#e0a433"
                                    />
                                    <span>4.91<small>(147)</small></span>
                                </ExploreRet>
                                <ExploreComforts>
                                    <ExploreCardTitle>Comfort Space</ExploreCardTitle>
                                    <ExploreCardPrice>$210</ExploreCardPrice>
                                </ExploreComforts>
                                <ExploreDistance>1.2 km to Town Center</ExploreDistance>
                                <ExploreLocation><span><TiLocationOutline /></span>Turkey, Mamaris</ExploreLocation>
                                <ExploreRooms><span><HiOutlineOfficeBuilding /></span>Rooms available: 375</ExploreRooms>
                            </ExploreCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExploreCard>
                                <ExploreImg>
                                    <img src="/assets/img/explore.png" alt="explore-world" />
                                </ExploreImg>
                                <ExploreRet>
                                    <ReactStars
                                        count={1}
                                        // onChange={ratingChanged}
                                        size={24}
                                        color="#e0a433"
                                    />
                                    <span>4.91<small>(147)</small></span>
                                </ExploreRet>
                                <ExploreComforts>
                                    <ExploreCardTitle>Comfort Space</ExploreCardTitle>
                                    <ExploreCardPrice>$210</ExploreCardPrice>
                                </ExploreComforts>
                                <ExploreDistance>1.2 km to Town Center</ExploreDistance>
                                <ExploreLocation><span><TiLocationOutline /></span>Turkey, Mamaris</ExploreLocation>
                                <ExploreRooms><span><HiOutlineOfficeBuilding /></span>Rooms available: 375</ExploreRooms>
                            </ExploreCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExploreCard>
                                <ExploreImg>
                                    <img src="/assets/img/explore.png" alt="explore-world" />
                                </ExploreImg>
                                <ExploreRet>
                                    <ReactStars
                                        count={1}
                                        // onChange={ratingChanged}
                                        size={24}
                                        color="#e0a433"
                                    />
                                    <span>4.91<small>(147)</small></span>
                                </ExploreRet>
                                <ExploreComforts>
                                    <ExploreCardTitle>Comfort Space</ExploreCardTitle>
                                    <ExploreCardPrice>$210</ExploreCardPrice>
                                </ExploreComforts>
                                <ExploreDistance>1.2 km to Town Center</ExploreDistance>
                                <ExploreLocation><span><TiLocationOutline /></span>Turkey, Mamaris</ExploreLocation>
                                <ExploreRooms><span><HiOutlineOfficeBuilding /></span>Rooms available: 375</ExploreRooms>
                            </ExploreCard>
                        </SwiperSlide>
                    </Swiper>
                </ExploreContent>
            </Explore>
        </Container>

    )
}

export default ExploreWorld
