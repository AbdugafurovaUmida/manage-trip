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
import { DescriptionButtonMore } from '../../styled';
import { DetailTab } from '../../styled';
import { BiWifi } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import { MdOutlineKeyboardHide } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdPersonalVideo } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { RiExchangeLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
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
    border-bottom:${(props) => props.theme.TabContentBorder} ;
    margin:0 0 5px 0; 
},
.react-tabs__tab{
    padding: 0;
    padding-bottom:15px;
    color: ${(props) => props.theme.TabContentColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    &:not(:last-child){
        margin-right:40px;
    }
}
`



const DetailInfo = ({props}) => {

    const { t } = useTranslation()

    return (
        <DetailInform>
            <DetailInfoBtn>
                <button>5.0</button>
                <button>{t('Perfect')}</button>
                <button>{t('Hotels')}</button>
                <button>{t('Building')}</button>
                <button>{t('Top-value')}</button>
                <ReactStars
                    count={4, 5}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                />
            </DetailInfoBtn>
            <DetailInformTitle>{t('Exclusive-room')}</DetailInformTitle>
            <DetailInformText>{props.name}</DetailInformText>
            <DetailTab>
                <Tabs >
                    <TabListStyle>
                        <TabContentStyle>
                            <TabList>
                                <Tab> <TabStyle>{t('Description')} </TabStyle> </Tab>
                                <Tab><TabStyle>{t('Features')} </TabStyle></Tab>
                                <Tab><TabStyle> {t('Virtual')} </TabStyle></Tab>
                                <Tab><TabStyle> {t('Rooms-price')} </TabStyle></Tab>
                                <Tab><TabStyle> {t('Review')} </TabStyle></Tab>
                            </TabList>
                        </TabContentStyle>
                    </TabListStyle>
                    <TabPanel>
                        <DescriptionText>Arabian Park Hotel is a great choice for travellers looking for a 3 star hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8 kms).
                        </DescriptionText>
                        <DescriptionFeaturesTitle>{t('Hotel-features')}</DescriptionFeaturesTitle>
                        <DescriptionFeatures>
                            <FeatureWifi> <span><BiWifi /> </span> Wi-fi</FeatureWifi>
                            <FeatureBathup> <span><FaBath /></span>{t('Bathup')}</FeatureBathup>
                            <FeatureBreakfast> <span><MdRestaurant /> </span>{t('Breakfast')}</FeatureBreakfast>
                            <FeatureBed><span><RiHotelBedLine /></span>{t('Kings-bed')}</FeatureBed>
                            <FeatureRoom><span><RiExchangeLine /></span> 4m &times; 6m</FeatureRoom>
                        </DescriptionFeatures>
                        <DescriptionAmenities>
                            <DescriptionAmenitiesTitle>
                               {t('Amenities')}
                            </DescriptionAmenitiesTitle>
                            <div>
                                <ul>
                                    <li> <span><BiWifi /></span> {t('Free')} wifi 24/7</li>
                                    <li> <span><RiComputerLine /></span> {t('Free')} {t('computer')}</li>
                                    <li> <span><MdOutlineComputer /></span> {t('Free')} wifi 24/7</li>
                                    <li> <span><MdPersonalVideo /> </span> {t('Free')} wifi 24/7</li>
                                </ul>
                                <ul>
                                    <li> <span><FaBath /></span> {t('Free')} {t('clean-bathroom')}</li>
                                    <li> <span><MdEmojiFoodBeverage /></span> {t('Breakfast-included')}</li>
                                    <li> <span><MdOutlineKeyboardHide /></span> ATM</li>
                                    <li> <span><HiOutlineOfficeBuilding /></span> {t('Nearby city')}</li>
                                </ul>
                            </div>
                            <DescriptionButtonMore>
                               {t('More-details')}
                            </DescriptionButtonMore>
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
