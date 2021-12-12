import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { CgFlagAlt } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiWifi } from "react-icons/bi";
import { BsCalendar4Range } from "react-icons/bs";
import { FaPlane } from "react-icons/fa";
import { RiParkingBoxLine } from "react-icons/ri";
import { BsJournalBookmark } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";
import apiCalls from '../../config/api';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Hotelsinfo = styled.section`
`

const HotelsinfoCard = styled.a`
text-decoration:none;
font-family: 'DM Sans';
border: ${(props) => props.theme.PopularFilterBorder};
border-radius: 20px;
overflow:hidden;
display:flex;
margin-bottom:50px;
min-height:465px;
img{
    width:400px;
    object-fit:cover;
    object-position:center;
    
}
`

const HotelsinfoCardOffer = styled.div`
padding:30px 26px 30px 30px;
`
const HotelsinfoCardTitle = styled.h3`
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color:${(props) => props.theme.HotelsinfoCardTitleColor} ;
`


const HotelsinfoCardRating = styled.div`
display:flex;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelsinfoCardRating}  ;
margin-bottom:43px;
small{
    font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelsinfoCardRatingSmall} ;
margin-left:12px;
margin-right:4px;
}
`
const HotelsInfoLocation = styled.div`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #141416;
margin-right:20px;
display:inline-block;
span{
    color: #84878B;
    font-size:20px;
    margin-right:12px;
}
`
const HotelsInfoDat =styled.div`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #141416;
display:inline-block;
span{
    color:#84878B;
    margin-right:8px;
    font-size:20px;
}
`

const HotelsInfoDepature = styled.div`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #141416;
display:block;
span{
    color:#84878B;
    margin-right:16px;
    font-size:20px;
    svg{
        margin-top:20px;
        width:20px;
        height:30px;
    },
    path{
        transform:rotate(-40deg);
        
    }
}
`

const ImportantInformation = styled.div`
// display:flex;
// flex-wrap:wrap;
span{
    color:${(props) => props.theme.ImportantInformationIconColor};
    
}
div{
        color:${(props) => props.theme.ImportantInformationtextColor};
        
    }

`

const HotelsFilterAminities = styled.div`
margin-top:20px;
flex:1;
div{
    color:${(props) => props.theme.ImportantInformationtextColor};
    span{
         color:${(props) => props.theme.ImportantInformationIconColor};
}
}

`

const HotelsWifi = styled.div`
font-family: DM Sans;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-bottom:12.5px;
span{
    color: #84878B;
    font-size:18px;
    margin-right:16px;
}
`

const HotelsParking = styled.div`
font-family: DM Sans;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-bottom:12.5px;
span{
    color: #84878B;
    font-size:18px;
    margin-right:16px;
}
`

const HotelsSpecialOffers = styled.div`
font-family: DM Sans;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-bottom:12.5px;
span{
    color: #84878B;
    font-size:18px;
    margin-right:16px;
}
`

const HotelsWebsite = styled.div`
font-family: DM Sans;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-bottom:12.5px;
    // white-space:nowrap;
    // text-overflow:ellipsis;
    // overflow:hidden;

span{
    color: #84878B;
    font-size:18px;
    margin-right:16px;
}
`

const HotelsMeasures = styled.div`
font-family: DM Sans;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-bottom:10px;
span{
    color: #84878B;
    font-size:18px;
    margin-right:16px;
}
`
const HotelsFilterBooking =styled.div`
text-align:center;

`
 const HotelsAminitiesContent =styled.div`
 display:flex;
 align-items:end;

 `

 const HotelsFilterBookingBtn = styled.div`
 margin:24px 0;

 a{
     text-decoration:none;
     padding:10px 40px;
     font-style: normal;
     font-weight: bold;
     font-size: 20px;
     line-height: 26px;
     color: #FFFFFF;
     background-color: #3B71FE;
     box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
     border-radius: 23px;
     font-family: DM Sans;
     
 }
 `

 const HotelsPrice = styled.div`
 padding:5px 10px;
 width:176px;
 height:49px;
 background-color:${(props) => props.theme.HotelsPriceBg} ;
border-radius: 37px;
 display:inline-block;
 justify-content:center;
 align-items:center;
 font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 41px;
text-align: center;
color:${(props) => props.theme.HotelsPriceColor} ;
 span{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #84878B;
 }
 `
 

const ViewAllButton = styled.button`
margin:70px auto 0 auto;
padding:10px 42px 12px 42px;
border-radius: 47px;
border: 1px solid #B1B5C4;
background-color: transparent;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: ${(props) => props.theme.ViewAllButtonColor};
display:block;
img{
    margin-right:15px;
}
` 



const HotelsFilterInfo = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [page,setPage] = useState(0)
    const [totalPage,setTotalpage] = useState(0)

    
    const handleClick = () => {
        navigate('/hotel-payment/:id')
    }


    const loadMore = () => {
        if(page < totalPage){
            return console.log(setPage(page + 1));
        
        }
        
    }


    useEffect(() => {

        const gethotels= async () => {
            try {
                const data = await apiCalls.gethotels();
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);
                setHotels(data);
                setTotalpage(data.page)
                console.log(data)
            } catch (error) {
                setError(error.message);
                setIsLoading(true)
            }
        }

        gethotels();

    }, []);



    const mappedHotels = hotels.map(el => (
        <HotelsinfoCard key={el.id} href={`/details/${el.id}`}>
        <img src={`/assets/img/${el.photo}`} alt={el.name}/>
        <HotelsinfoCardOffer>
            <HotelsinfoCardTitle> {el.name}</HotelsinfoCardTitle>
            <HotelsinfoCardRating>
                <ReactStars
                    count={1}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                /><small>{el.rating}</small> <span>({el.reviews} {`${t('SuccesReviews')}`})</span>
                <CgFlagAlt style={{fontSize:'16px',margin:'0 8px 0 20px'}} />
                {el.location}
            </HotelsinfoCardRating>
            <ImportantInformation>
            <HotelsInfoLocation><span><HiOutlineLocationMarker /></span> {el.location}</HotelsInfoLocation>
           <HotelsInfoDat><span><BsCalendar4Range /></span>15.05.2021-16.05.2021</HotelsInfoDat>
           <HotelsInfoDepature><span><FaPlane /></span>{`${t('Depature-from')}`}  {(el.location).slice(0, (el.location).indexOf(','))}</HotelsInfoDepature>
            </ImportantInformation>
            <HotelsAminitiesContent>
            <HotelsFilterAminities>
                <HotelsWifi><span><BiWifi/></span>{t('Free')} Wifi</HotelsWifi>
                <HotelsParking><span><RiParkingBoxLine/></span>{t('Free')} {t('parking')}</HotelsParking>
                <HotelsSpecialOffers><span><BsJournalBookmark/></span>{t('Special-offer')}</HotelsSpecialOffers>
                <HotelsWebsite><span><VscGlobe/></span>{t('Visit-hotel-website')}</HotelsWebsite>
                <HotelsMeasures><span><BiCoinStack/></span>{t('Taking-safety-measures')}</HotelsMeasures>
            </HotelsFilterAminities>
            <HotelsFilterBooking>
                <HotelsPrice>{`$${el.price}`} <span>{t('For-Two')}</span></HotelsPrice>
                <HotelsFilterBookingBtn><Link onClick={handleClick} to={`/hotel-payment/${el.id}`}>{t('Book-now')}</Link></HotelsFilterBookingBtn>
            </HotelsFilterBooking>
            </HotelsAminitiesContent>
        </HotelsinfoCardOffer>
    </HotelsinfoCard>

    )
        )

    return (
        <Hotelsinfo>
           {error ? <p className='error'>{error}</p> : ' ' }
           {isLoading ? <Loader /> : ''}
           {!isLoading && !error ? mappedHotels : ''}
            <ViewAllButton onClick={loadMore}>
                <img src="/assets/img/loader-button.svg" alt="lodaer-btn" />
               {t('View-All')}
            </ViewAllButton>
        </Hotelsinfo>
    )
}

export default HotelsFilterInfo;
