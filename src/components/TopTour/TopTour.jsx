import React from 'react'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import TopTourCards from '../TopTourCard/TopTourCards';
import styled from 'styled-components'
import { Container } from '../../styled'
import Loader from '../../Loader/Loader';
import apiCalls from '../../config/api';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import './TopTour.css'

const Top = styled.section`
padding:70px 0;
position:relative;
`

const TopTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color:${(props) => props.theme.TopTitleColor} ;
margin-bottom:12px;
`


const TopText = styled.h2`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.TopTextColor} ;
margin:0 0 50px 0;
`

const TopTourContent = styled.div`

display:flex;
gap:30px;
`

const TopButtons = styled.div`
position:absolute;
right:0;
top:110px;
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



const TopTour = () => {
    const { t } = useTranslation()

    const [tour, setTour] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        const gettours = async () => {
            try {
                const data = await apiCalls.gettours();
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);
                setIsLoading(true)
                setTour(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
            }
        }

        gettours();

    }, []);



    return (
        <Container>
            <Top>
                <TopTitle>
                    {t('TopTitle')}
                </TopTitle>
                <TopText>
                    {t('TopText')}

                </TopText>
                <TopButtons>
                    <button className='top-prev-button'><IoIosArrowBack  /></button>
                    <button className='top-next-button'><IoIosArrowForward className='top-next-button' /></button>
                </TopButtons>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.top-next-button',
                        prevEl: '.top-prev-button'
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    <TopTourContent>
                        {tour.map(el => (<SwiperSlide><TopTourCards tourobj={el} key={el.id} /></SwiperSlide>))}
                    </TopTourContent>
                </Swiper> : ''}
            </Top>
        </Container>
    )
}

export default TopTour;
