import React from 'react'
import { Container } from '../../styled'
import './TrendingCites.css'
import ReactStars from "react-rating-stars-component";
import styled from 'styled-components';

const TredingCites = () => {

const Cites =styled.section`
background-color: #F5F5F5;
font-family: 'DM Sans';
padding:59px 0 44px 0;
`
const CitesTitle = styled.h2`
font-weight: bold;
font-size: 48px;
line-height: 70px;
text-align: center;
letter-spacing: -0.005em;
color: #222529;
margin-bottom:16px;
`

const CitesText = styled.p`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 24px;
text-align: center;
color: #3B3E44;
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
 background-color:#fff;
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
color: #282832;
margin-bottom:12px;
 `


 const CitesRating = styled.div`
 font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #3B3E44;
display:flex;
margin-bottom:22px;
span{
    color: #84878B;
    margin-right:7px;
    font-size: 14px;
}
 `

 const CitesPrice = styled.div`
 font-family:'Poppins';
font-weight: 600;
font-size: 25px;
line-height: 18px;
text-align: center;
color: #3B3E44;
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



    return (
               <Cites>
        <Container>
            <CitesTitle>Trending cites</CitesTitle>
            <CitesText>The most searched for cities on TripGuide</CitesText>
            <CitesContent>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
                <CitesCard>
                    <CitesImg><img src="/assets/img/trending-cites.jpg" alt="trending-cites" /></CitesImg>
                    <CitesInfo>
                       <CitesName>Manila</CitesName> 
                       <CitesRating>
                       <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                        4.91 <span> (147)</span>
                       </CitesRating>
                       <CitesPrice>$250.00 <span>/night</span></CitesPrice>
                       <BookNowMiddle>Book Now</BookNowMiddle>
                    </CitesInfo>
                </CitesCard>
            </CitesContent>
        </Container>
            </Cites>
     
    )
}

export default TredingCites
