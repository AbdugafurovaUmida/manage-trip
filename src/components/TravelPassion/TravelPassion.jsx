import React from 'react'
import { Container } from '../../styled'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";


const Travel = styled.section`
padding-top:70px;
padding-bottom:244px;
`
const TravelTitle = styled.h2`
 font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #141416;
margin-bottom:12px;
 `

const TravelText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
margin:0;
`


const TravelContent = styled.div`
margin-top:42px;
display:flex;
justify-content:space-between;
`


const TravelCard = styled.div`
position:relative;
:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image: linear-gradient(8.54deg, rgba(31, 31, 31, 0.63) 17.12%, rgba(35, 35, 35, 0) 92.69%);
    border-radius: 15px;
    z-index:5;
}
img{
    z-index:3;
    border-radius: 15px;
}

`

const TravelCardInfo = styled.div`
position:absolute;
left:30px;
bottom:21px;
z-index:7;
`
const TravelName = styled.h4`
font-family: 'Poppins';
font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
`

const TravelRating = styled.div`
font-family: 'DM Sans';
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
display:flex;
small{
    font-size: 14px;
    margin-left:10px;
    margin-right:6px;
}
`


const TravelPassion = () => {



    return (
        <Container>
            <Travel>
                <TravelTitle>Travel Your Passion</TravelTitle>
                <TravelText>Most Brilliant reasons Entrada should be your one-stop-shop!</TravelText>
                <TravelContent>
                    <TravelCard>
                        <img src="/assets/img/travel-passion(1).jpg" alt="travel-passion" />
                        <TravelCardInfo>
                            <TravelName> Beach Hobby</TravelName>
                            <TravelRating>
                                <ReactStars
                                    count={1}
                                    // onChange={ratingChanged}
                                    size={24}
                                    color="#e0a433"
                                />
                                <small>4.8</small>  (122 reviews)
                            </TravelRating>
                        </TravelCardInfo>
                    </TravelCard>
                    <TravelCard>
                        <img src="/assets/img/travel-passion(2).jpg" alt="travel-passion" />
                        <TravelCardInfo>
                            <TravelName> City Tours</TravelName>
                            <TravelRating>
                                <ReactStars
                                    count={1}
                                    // onChange={ratingChanged}
                                    size={24}
                                    color="#e0a433"
                                />
                                <small>4.8</small>  (122 reviews)
                            </TravelRating>
                        </TravelCardInfo>
                    </TravelCard>
                    <TravelCard>
                        <img src="/assets/img/travel-passion(3).jpg" alt="travel-passion" />
                        <TravelCardInfo>
                            <TravelName> Hiking Trips</TravelName>
                            <TravelRating>
                                <ReactStars
                                    count={1}
                                    // onChange={ratingChanged}
                                    size={24}
                                    color="#e0a433"
                                />
                                <small>4.8</small>  (122 reviews)
                            </TravelRating>
                        </TravelCardInfo>
                    </TravelCard>
                    <TravelCard>
                        <img src="/assets/img/travel-passion(4).jpg" alt="travel-passion" />
                        <TravelCardInfo>
                            <TravelName> Sports Trips</TravelName>
                            <TravelRating>
                                <ReactStars
                                    count={1}
                                    // onChange={ratingChanged}
                                    size={24}
                                    color="#e0a433"
                                />
                                <small>4.8</small>  (122 reviews)
                            </TravelRating>
                        </TravelCardInfo>
                    </TravelCard>
                </TravelContent>
            </Travel>

        </Container>
    )
}

export default TravelPassion
