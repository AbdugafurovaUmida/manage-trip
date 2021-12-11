import React from 'react'
import ReactStars from "react-rating-stars-component";
import { TiLocationOutline } from "react-icons/ti";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ExploreCard = styled.div`
padding:14px 14px 21px 14px;
background: ${(props) => props.theme.ExploreCardBg};
border:${(props) => props.theme.ExploreCardBorder} ;
border-radius: 20px;
font-family: 'DM Sans';
:hover{
    box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
}
:active{
    opacity:0.6;
}
`

const ExploreImg = styled.div`
`
const ExploreRet = styled.div`
display:flex;
align-items:center;
margin:20px 0px 12px 0px;
color:${(props) => props.theme.ExploreRetColor};
small{
    margin-left:6px;
    color:${(props) => props.theme.ExploreRetsmall} ;
}
`

const ExploreCardTitle = styled.h5`
font-weight: bold;
font-size: 20px;
line-height: 26px;
color:${(props) => props.theme.ExploreCardTitleColor}  ;
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
color:${(props) => props.theme.ExploreRetsmall} ;
`

const ExploreLocation = styled.div`
margin-top:8px;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.ExploreRetsmall} ;
span{
    color:${(props) => props.theme.ExploreIconsColor};
    font-size:18px;
    margin-right:5px;
}
`

const ExploreRooms = styled.div`
margin-top:8px;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.ExploreRetsmall};
span{
    color:${(props) => props.theme.ExploreIconsColor};
    margin-right:8px;
    font-size:16px;
}
`

const ExploreComforts = styled.div`
display:flex;
justify-content:space-between;
`

const ExploreCards = ({exploreobj}) => {

    const { t } = useTranslation()


    return (
        <ExploreCard>
        <ExploreImg>
            <img src={`/assets/img/${exploreobj.image}`}  alt="explore-world" />
        </ExploreImg>
        <ExploreRet>
            <ReactStars
                count={1}
                // onChange={ratingChanged}
                size={24}
                color="#e0a433"
            />
            <span>{exploreobj.rating}</span>
        </ExploreRet>
        <ExploreComforts>
            <ExploreCardTitle>{exploreobj.title}</ExploreCardTitle>
            <ExploreCardPrice>{exploreobj.price}</ExploreCardPrice>
        </ExploreComforts>
        <ExploreDistance>{exploreobj.radius} to Town Center</ExploreDistance>
        <ExploreLocation><span><TiLocationOutline /></span>{exploreobj.location}</ExploreLocation>
        <ExploreRooms><span><HiOutlineOfficeBuilding /></span>{`${t('Rooms-available')}`}{exploreobj.rooms} </ExploreRooms>
    </ExploreCard>
    )
}

export default ExploreCards
