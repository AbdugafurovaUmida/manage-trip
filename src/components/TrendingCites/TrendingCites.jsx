import React from 'react'
import { Container } from '../../styled'
import './TrendingCites.css'
import ReactStars from "react-rating-stars-component";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import apiCalls from '../../config/api';
import { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';



const Cites = styled.section`
background-color:${(props) => props.theme.CitesBg};
font-family: 'DM Sans';
padding:59px 0 44px 0;
`
const CitesTitle = styled.h2`
font-weight: bold;
font-size: 48px;
line-height: 70px;
text-align: center;
letter-spacing: -0.005em;
color:${(props) => props.theme.CitesTitleColor} ;
margin-bottom:16px;
`

const CitesText = styled.p`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 24px;
text-align: center;
color:${(props) => props.theme.CitesTextColor} ;
margin:0;
`
const CitesContent = styled.div`
 padding-top:50px;
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
gap:30px;
 `

const CitesCard = styled.div`
 display:flex;
 padding:24px;
 background-color:${(props) => props.theme.CitesCardBg};
 border-radius: 20px;
 width:534px;
 margin-bottom:15px;
 `

const CitesImg = styled.div`
 img{
    background: #F3EDED;
    border-radius: 15px;
 }
 `

const CitesInfo = styled.div`
 margin-left:24px;
 `

const CitesName = styled.h4`
 font-weight: bold;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.CitesNameColor} ;
margin-bottom:12px;
 `


const CitesRating = styled.div`
 font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
color:${(props) => props.theme.CitesRatingColor}  ;
display:flex;
margin-bottom:22px;
span{
    color: #84878B;
    // margin-left:7px;
    font-size: 14px;
}
 `

const CitesPrice = styled.div`
 font-family:'Poppins';
font-weight: 600;
font-size: 25px;
line-height: 18px;
// text-align: center;
color:${(props) => props.theme.CitesPriceColor}  ;
margin-bottom:24px;
 span{
    color: #84878B;
    font-size: 16px;
 }
 `

const BookNowMiddle = styled.a`
 padding:7px 16px 8px 16px;
 background: #316BFF;
border-radius: 6px;
font-weight: bold;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #FFFFFF;
text-decoration:none;
 `


const TredingCites = () => {

    const { t } = useTranslation()


    const [ cites, setCites] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const getcities = async () => {
            try{
                const data = await apiCalls.getcities()
                setTimeout(() => {
                    setIsLoading(false) 
                 }, 4000);
                  setIsLoading(true) 
                setCites(data);
            } catch (error) {
                setError(error.message);
            }
        }

        getcities();

    }, []);


    const mappedCites = cites.map(el => (
        <CitesCard key={el.id}>
        <CitesImg><img src={`/assets/img/${el.photo}`} alt="trending-cites" /></CitesImg>
        <CitesInfo>
            <CitesName>{el.name}</CitesName>
            <CitesRating>
                <ReactStars
                    count={1}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                />
                    {el.rating}
            </CitesRating>
            <CitesPrice> {`$ ${el.price}`}<span>{t('night')}</span></CitesPrice>
            <BookNowMiddle>{t('Book-now')}</BookNowMiddle>
        </CitesInfo>
    </CitesCard>

    )
        )


    return (
        <Cites>
            <Container>
                <CitesTitle>{t('Trending-cites')}</CitesTitle>
                <CitesText>{t('CitesText')}</CitesText>
                <CitesContent>
                 {error ? <p className='error'>{error}</p> : ' ' }
                 {isLoading ? <Loader /> : ''}
                 {!isLoading && !error ? mappedCites : ''}
                </CitesContent>
            </Container>
        </Cites>
         
         

    )
}

export default TredingCites
