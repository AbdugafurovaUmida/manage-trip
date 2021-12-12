import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styled';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { useTranslation } from 'react-i18next';
import ExploreCards from '../ExploreCard/ExploreCards'
import Loader from '../../Loader/Loader';
import 'swiper/swiper.min.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiCalls from '../../config/api';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const Explore = styled.section`
padding-bottom:70px;
position:relative;
`
const ExploreTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.ExploreTitleColor} ;

`

const ExploreText = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.ExploreTextColor} ;
margin:0 0 50px 0;
`
const ExploreContent = styled.div`
margin-top:49px;
display:flex;
gap:30px;
`
const ExploreButtons = styled.div`
position:absolute;
right:0;
top:50px;
    button{
        background-color: #F4F5F6;
        width:36px;
        height:36px;
        border-radius:50%;
        border: 1px solid #F4F5F6;
        line-height:13px;
        color:#B1B5C4;
        svg{
            margin:0 auto;
        }
        :not(:last-child){
            margin-right:10px;
        }
        :active{
          background-color:#E6E8EC;
          border: 1px solid #E6E8EC;
          color:#84878B;
        }
    }
  
`

SwiperCore.use([Pagination, Navigation]);

const ExploreWorld = () => {

    const { t } = useTranslation()

    const [explore, setExplore] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        const getexplore = async () => {
            try {
                const data = await apiCalls.getexplore();
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);          
                setExplore(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
                setIsLoading(true)
            }
        }
        getexplore();

    }, []);


    return (
        <Container>
            <Explore>
                <ExploreButtons>
                    <button className='prev-button'><IoIosArrowBack /></button>
                    <button className='next-button'><IoIosArrowForward /></button>  
                </ExploreButtons>
                <ExploreTitle>{t('Explore-title')}</ExploreTitle>
                <ExploreText>10,788 {`${t('Explore-text')}`}</ExploreText>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl:'.next-button',
                        prevEl:'.prev-button'
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                       <ExploreContent>
                        {explore.map(el => (<SwiperSlide><ExploreCards exploreobj={el} key={el.id} /></SwiperSlide>))}
                   </ExploreContent>
                </Swiper> : ''}
            </Explore>
        </Container>

    )
}

export default ExploreWorld;
