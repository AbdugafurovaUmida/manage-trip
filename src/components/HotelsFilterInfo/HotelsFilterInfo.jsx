import React from 'react'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import { CgFlagAlt } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiWifi } from "react-icons/bi";
import { BsCalendar4Range } from "react-icons/bs";
import { FaPlane } from "react-icons/fa";
import { RiParkingBoxLine } from "react-icons/ri";
import { BsJournalBookmark } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Hotelsinfo = styled.section`
`

const HotelsinfoCard = styled.a`
text-decoration:none;
font-family: 'DM Sans';
border: 1px solid #E7ECF3;
border-radius: 20px;
overflow:hidden;
display:flex;
margin-bottom:50px;
`

const HotelsinfoCardOffer = styled.div`
padding:30px 26px 30px 30px;
`
const HotelsinfoCardTitle = styled.h3`
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color: #23262F;
`


const HotelsinfoCardRating = styled.div`
display:flex;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #84878B;
margin-bottom:43px;
small{
    font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #3B3E44;
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
display:flex;
flex-wrap:wrap;
`

const HotelsFilterAminities = styled.div`
margin-top:40px;
flex:1;
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
 margin-top:24px;
 a{
     text-decoration:none;
     padding:10px 40px;
     font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #FFFFFF;
background-color: #3B71FE;
box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
border-radius: 23px;

 }
 `

 const HotelsPrice = styled.div`
 padding:5px 10px;
 width:176px;
 height:49px;
 background: #F4F5F6;
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
color: #23262F;
 span{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #84878B;
 }
 `


const HotelsFilterInfo = () => {
    return (
        <Hotelsinfo>
            <HotelsinfoCard>
                <img src="/assets/img/hotels-filter-info.jpg" alt="hotels" />
                <HotelsinfoCardOffer>
                    <HotelsinfoCardTitle> Zuich, Switzerland</HotelsinfoCardTitle>
                    <HotelsinfoCardRating>
                        <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        /><small>4.8</small> <span>(122 reviews)</span>
                        <CgFlagAlt style={{fontSize:'16px',margin:'0 8px 0 20px'}} />
                        Zuich town, Switzerland
                    </HotelsinfoCardRating>
                    <ImportantInformation>
                    <HotelsInfoLocation><span><HiOutlineLocationMarker /></span> Zuich Hotel, Switzerland</HotelsInfoLocation>
                   <HotelsInfoDat><span><BsCalendar4Range /></span>15.05.2021-16.05.2021</HotelsInfoDat>
                   <HotelsInfoDepature><span><FaPlane /></span>Depature from zuich</HotelsInfoDepature>
                    </ImportantInformation>
                    <HotelsAminitiesContent>
                    <HotelsFilterAminities>
                        <HotelsWifi><span><BiWifi/></span>Free Wifi</HotelsWifi>
                        <HotelsParking><span><RiParkingBoxLine/></span>Free parking</HotelsParking>
                        <HotelsSpecialOffers><span><BsJournalBookmark/></span>Special offer</HotelsSpecialOffers>
                        <HotelsWebsite><span><VscGlobe/></span>Visit hotel website </HotelsWebsite>
                        <HotelsMeasures><span><BiCoinStack/></span>Taking safety measures</HotelsMeasures>
                    </HotelsFilterAminities>
                    <HotelsFilterBooking>
                        <HotelsPrice>$320  <span>For Two</span></HotelsPrice>
                        <HotelsFilterBookingBtn><Link to='/details'>Book Now</Link></HotelsFilterBookingBtn>
                    </HotelsFilterBooking>
                    </HotelsAminitiesContent>
                </HotelsinfoCardOffer>
            </HotelsinfoCard>
            <HotelsinfoCard>
                <img src="/assets/img/hotels-filter-info.jpg" alt="hotels" />
                <HotelsinfoCardOffer>
                    <HotelsinfoCardTitle> Zuich, Switzerland</HotelsinfoCardTitle>
                    <HotelsinfoCardRating>
                        <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        /><small>4.8</small> <span>(122 reviews)</span>
                        <CgFlagAlt style={{fontSize:'16px',margin:'0 8px 0 20px'}} />
                        Zuich town, Switzerland
                    </HotelsinfoCardRating>
                    <ImportantInformation>
                    <HotelsInfoLocation><span><HiOutlineLocationMarker /></span> Zuich Hotel, Switzerland</HotelsInfoLocation>
                   <HotelsInfoDat><span><BsCalendar4Range /></span>15.05.2021-16.05.2021</HotelsInfoDat>
                   <HotelsInfoDepature><span><FaPlane /></span>Depature from zuich</HotelsInfoDepature>
                    </ImportantInformation>
                    <HotelsAminitiesContent>
                    <HotelsFilterAminities>
                        <HotelsWifi><span><BiWifi/></span>Free Wifi</HotelsWifi>
                        <HotelsParking><span><RiParkingBoxLine/></span>Free parking</HotelsParking>
                        <HotelsSpecialOffers><span><BsJournalBookmark/></span>Special offer</HotelsSpecialOffers>
                        <HotelsWebsite><span><VscGlobe/></span>Visit hotel website </HotelsWebsite>
                        <HotelsMeasures><span><BiCoinStack/></span>Taking safety measures</HotelsMeasures>
                    </HotelsFilterAminities>
                    <HotelsFilterBooking>
                        <HotelsPrice>$320  <span>For Two</span></HotelsPrice>
                        <HotelsFilterBookingBtn><Link to='/'>Book Now</Link></HotelsFilterBookingBtn>
                    </HotelsFilterBooking>
                    </HotelsAminitiesContent>
                </HotelsinfoCardOffer>
            </HotelsinfoCard>
            <HotelsinfoCard>
                <img src="/assets/img/hotels-filter-info.jpg" alt="hotels" />
                <HotelsinfoCardOffer>
                    <HotelsinfoCardTitle> Zuich, Switzerland</HotelsinfoCardTitle>
                    <HotelsinfoCardRating>
                        <ReactStars
                            count={1}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        /><small>4.8</small> <span>(122 reviews)</span>
                        <CgFlagAlt style={{fontSize:'16px',margin:'0 8px 0 20px'}} />
                        Zuich town, Switzerland
                    </HotelsinfoCardRating>
                    <ImportantInformation>
                    <HotelsInfoLocation><span><HiOutlineLocationMarker /></span> Zuich Hotel, Switzerland</HotelsInfoLocation>
                   <HotelsInfoDat><span><BsCalendar4Range /></span>15.05.2021-16.05.2021</HotelsInfoDat>
                   <HotelsInfoDepature><span><FaPlane /></span>Depature from zuich</HotelsInfoDepature>
                    </ImportantInformation>
                    <HotelsAminitiesContent>
                    <HotelsFilterAminities>
                        <HotelsWifi><span><BiWifi/></span>Free Wifi</HotelsWifi>
                        <HotelsParking><span><RiParkingBoxLine/></span>Free parking</HotelsParking>
                        <HotelsSpecialOffers><span><BsJournalBookmark/></span>Special offer</HotelsSpecialOffers>
                        <HotelsWebsite><span><VscGlobe/></span>Visit hotel website </HotelsWebsite>
                        <HotelsMeasures><span><BiCoinStack/></span>Taking safety measures</HotelsMeasures>
                    </HotelsFilterAminities>
                    <HotelsFilterBooking>
                        <HotelsPrice>$320  <span>For Two</span></HotelsPrice>
                        <HotelsFilterBookingBtn><Link to='/details'>Book Now</Link></HotelsFilterBookingBtn>
                    </HotelsFilterBooking>
                    </HotelsAminitiesContent>
                </HotelsinfoCardOffer>
            </HotelsinfoCard>
        </Hotelsinfo>
    )
}

export default HotelsFilterInfo
