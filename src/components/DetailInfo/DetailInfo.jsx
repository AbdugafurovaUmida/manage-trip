import React from 'react';
import styled from 'styled-components';
import { DetailInfoBtn } from '../../styled';
import ReactStars from "react-rating-stars-component";
import { DetailInform } from '../../styled';
import { DetailInformTitle } from '../../styled';
import { DetailInformText } from '../../styled';
import { DescriptionText } from '../../styled';
import { DescriptionFeaturesTitle } from '../../styled';
import { DescriptionFeatures } from '../../styled';
import { FeatureWifi } from '../../styled';
import { FeatureBathup } from '../../styled';
import { FeatureBreakfast } from '../../styled';
import { FeatureBed } from '../../styled';
import { FeatureRoom } from '../../styled';
import { DescriptionAmenities } from '../../styled';
import { DescriptionAmenitiesTitle } from '../../styled';
import { DetailTab } from '../../styled';
import { BiWifi } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";
import { MdRestaurant} from "react-icons/md";
import { MdPersonalVideo } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { RiExchangeLine } from "react-icons/ri";
import './DetailInfo.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const TabStyle = styled.div`

.react-tabs__tab--selected &{
    color: #145CE6;
   padding:0;
}
`

const TabListStyle = styled.div`
.react-tabs__tab.react-tabs__tab--selected{
   border-bottom:2px solid #145CE6;
}
`

const TabContentStyle = styled.div`
.react-tabs__tab-list{
    border-bottom: 1px solid #E6E8EC;
    margin:0 0 5px 0; 
},
.react-tabs__tab{
    padding: 0;
    padding-bottom:15px;
    color: #23262F;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    &:not(:last-child){
        margin-right:40px;
    }
}
`



const DetailInfo = () => {



    return (
        <DetailInform>
            <DetailInfoBtn>
                <button>5.0</button>
                <button>Perfect</button>
                <button>Hotels</button>
                <button>Building</button>
                <button>Top value</button>
                <ReactStars
                    count={4, 5}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                />
            </DetailInfoBtn>
            <DetailInformTitle>Exclusive room in house</DetailInformTitle>
            <DetailInformText>Zuich, Switzerland</DetailInformText>
            <DetailTab>
                <Tabs >
                    <TabListStyle>
                        <TabContentStyle>
                            <TabList>
                                <Tab> <TabStyle>Description </TabStyle> </Tab>
                                <Tab><TabStyle>Features </TabStyle></Tab>
                                <Tab><TabStyle> Virtual </TabStyle></Tab>
                                <Tab><TabStyle> Room &#38; Price </TabStyle></Tab>
                                <Tab><TabStyle> Review </TabStyle></Tab>
                            </TabList>
                        </TabContentStyle>
                    </TabListStyle>
                    <TabPanel>
                        <DescriptionText>Arabian Park Hotel is a great choice for travellers looking for a 3 star hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8 kms).
                        </DescriptionText>
                        <DescriptionFeaturesTitle>Hotel features</DescriptionFeaturesTitle>
                        <DescriptionFeatures>
                            <FeatureWifi> <span><BiWifi /> </span> Wi-fi</FeatureWifi>
                            <FeatureBathup> <span><FaBath /></span> Bathup</FeatureBathup>
                            <FeatureBreakfast> <span><MdRestaurant /> </span> Breakfast</FeatureBreakfast>
                            <FeatureBed><span><RiHotelBedLine/></span> Kins bed</FeatureBed>
                            <FeatureRoom><span><RiExchangeLine /></span> 4m &times; 6m</FeatureRoom>
                        </DescriptionFeatures>
                        <DescriptionAmenities>
                            <DescriptionAmenitiesTitle>
                            Amenities
                            </DescriptionAmenitiesTitle>
                            <div>
                                <ul>
                                    <li> <span><BiWifi /></span> Free wifi 24/7</li>
                                    <li> <span><RiComputerLine /></span> Free computer</li>
                                    <li> <span><MdOutlineComputer /></span> Free wifi 24/7</li>
                                    <li> <span><MdPersonalVideo /> </span> Free wifi 24/7</li>
                                </ul>
                                <ul>
                                    <li> <span><FaBath /></span> Free clean bathroom</li>
                                    <li> <span></span> Breakfast included</li>
                                    <li> <span></span> ATM</li>
                                    <li> <span></span> Nearby city</li>
                                </ul>
                            </div>

                        </DescriptionAmenities>


                    </TabPanel>
                    <TabPanel>
                        <h2>Feature content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Virtual content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Rooms content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Review content</h2>
                    </TabPanel>
                </Tabs>
            </DetailTab>
        </DetailInform>
    )
}

export default DetailInfo
