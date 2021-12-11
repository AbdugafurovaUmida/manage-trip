import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    margin:0 auto;
    max-width:1170px;
`

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding: 10px 20px;
    font-size: ${(props) => props.theme.fontSize};
`;

export const Card = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.cardBg};
    padding: 10px 20px;
`;

// ====== DropdownBellBody=======

export const DropdownBellBody = styled.div`
top: 40px;
width: 414px;
max-height: 414px;
border: ${(props) => props.theme.BellDropdownBodyBorder};
background-color:${(props) => props.theme.BellDropdownBodyBG};
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
right: -150px;
border-radius: 20px;
padding: 20px 10px;
position: absolute;
display: none;
z-index: 111;
`

export const BellNotification_Text = styled.p`
margin: 0;
font-family: 'DM Sans';
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: ${(props) => props.theme.BellNotification_TextColor};
position: relative;
&:before{
        content: '';
        position: absolute;
        left: -40px;
        top: 50%;
        width:4px;
        height:4px;
        opacity:0;
        border-radius: 50%;
        background-color: red;
}
`

export const DropdownProfile = styled.div`
vertical-align: middle;
display: inline-block;
position:relative;
`

export const ProfileDropdownBody = styled.div`
border: ${(props) => props.theme.ProfileDropdownBodyBB};
box-shadow: 0px 6px 30px rgba(37, 37, 37, 0.16);
border-radius:${(props) => props.theme.ProfileDropdownBodyBR};
background-color:${(props) => props.theme.ProfileDropdownBodyBg};
z-index:333;
position: absolute;
display: none;
position: absolute;
padding: 20px 0 20px 21px;
left: -100px;
width: 238px;
margin-top: 20px;
div{
    font-family: 'Roboto';
    span{
        color: ${(props) => props.theme.ProfileDropdownBodyIcon}; 
    font-size: 20px;
    margin-left: 20px;
    display: inline-block;
    },
    a{
        text-decoration: none;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color:${(props) => props.theme.ProfileDropdownBodyColor} ;
        margin-left: 9px;
        display: inline-block;
    },
    p{
        text-decoration: none;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color:${(props) => props.theme.ProfileDropdownBodyColor} ;
        margin-left: 9px;
        display: inline-block;
        margin-top:20px;
    }
`

export const ProfileDropdownHeader = styled.div`
display: flex;
align-items: center;
color:${(props) => props.theme.ProfileDropdownHeaderBg};
h3{
    font-weight: 500;
    font-size: 14px;
    margin: 0 15px 0 10px;
}
}
`


// ======= Bread Crumb ======



// ========== Details =========

export const DetailsBreadCrumb = styled.div`
padding:40px 0 18px 100px;
span{
    margin:0 10px 0 7px;
}
background-color:${(props) => props.theme.HotelListTravelersBg};

span{
    margin:0px 10px 0px 7px;
}
a{
    color:${(props) => props.theme.BreadCrumbColor} !important;;
}
.active{
    color:${(props) => props.theme.BreadCrumbColor_Active} !important;
}
span{
    color:${(props) => props.theme.BreadCrumbColor};
}


`

export const HotelDetails = styled.section`
`

export const HotelDetailsTitle = styled.h2`
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color:${(props) => props.theme.HotelDetailsTitleColor} ;
margin-bottom:28px;
`

export const HotelDetailsImg = styled.div`
max-width:1340px;
max-height:632px;
border-radius:20px;
img{
    max-height:632px;
    width:100%;
    object-fit:cover;
    object-position:center;
    overflow:hidden;
    border-radius:20px;
}
`

export const HotelDetailCardRating = styled.div`
display:flex;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelDetailCardRatingspanColor};
margin-bottom:48px;
small{
    font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelDetailCardRatingColor} ;
margin-left:12px;
margin-right:4px;
}
`

export const DetailWrapper = styled.div`
padding:0px 100px 250px 100px;
`

export const DetailInfoBtn = styled.div`
padding:40px 0 20px 0;
display:flex;

button{
    background-color:${(props) => props.theme.DetailInfoBtnBg};
    border:transparent;
    padding:0;
    color:${(props) => props.theme.DetailInfoBtnColor};
    &:nth-child(1){
        padding:2.5px 5.5px;
        background-color: rgba(56, 179, 69, 0.1);
        border-radius: 5px;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #38B345;
        margin-right:17px;
    },
    &:nth-child(2){
        background-color: rgba(253, 151, 4, 0.1);
        border-radius: 5px;
        padding:2.5px 8.5px;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #FD9704;
        margin-right:17px;
    },
    &:nth-child(3){
        background-color: #EAEEFA;
        font-weight: normal;
        padding:2.5px 15px;
        font-size: 14px;
        line-height: 21px;
        color: #0B3BA7;
        margin-right:17px;
        border-radius: 5px;
    },
    &:nth-child(4){
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #E96594;
        background-color: #FCEBF1;
        border-radius: 5px;
        margin-right:16px;
    },
    &:nth-child(5){
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #DC6E3D;
        background-color: #FBEEE8;
        border-radius: 5px;
        margin-right:16px;
    }
}
`

export const DetailInform = styled.div`

`

export const DetailInformTitle = styled.h3`
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color:${(props) => props.theme.DetailInformTitle};
margin-bottom:10px;
`

export const DetailInformText = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.DetailInformText};
padding-bottom:22px;
border-bottom:${(props) => props.theme.DetailInformTextBorder};
`


export const DetailTab = styled.div`
margin-top:30px;

`

export const DescriptionText = styled.p`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.DescriptionTextColor} ;
margin-bottom:40px;
`

export const DescriptionFeaturesTitle = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.DescriptionFeaturesTitle};
margin-bottom:30px;
`
export const DescriptionFeatures = styled.div`
display:flex;
align-items:center;
padding-bottom:62px;
border-bottom:${(props) => props.theme.DescriptionFeatures};
`
export const FeatureWifi = styled.div`
margin-right:45px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: ${(props) => props.theme.FeaturesColor};
span{
    margin-right:10px;
    color: ${(props) => props.theme.FeaturesColor};
    font-size:22px;
}
`

export const FeatureBathup = styled.div`
margin-right:48px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeaturesColor};
span{
    margin-right:10px;
    color:${(props) => props.theme.FeaturesColor};
    font-size:22px;
}
`
export const FeatureBreakfast = styled.div`
margin-right:50px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeaturesColor};
span{
    margin-right:10px;
    color:${(props) => props.theme.FeaturesColor};
    font-size:22px;
}
`

export const FeatureBed = styled.div`
margin-right:45px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeaturesColor};
span{
    margin-right:10px;
    color:${(props) => props.theme.FeaturesColor};
    font-size:22px;
}
`
export const FeatureRoom = styled.div`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeaturesColor};
span{
    margin-right:10px;
    color:${(props) => props.theme.FeaturesColor};
    font-size:24px;
}
`

export const DescriptionAmenities = styled.div`
padding:60px 0px;
div{
    display:flex;
    ul{
        li{
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color:${(props) => props.theme.DescriptionAmenitiesColor} ;
            span{
                color:${(props) => props.theme.DescriptionAmenitiesColor};
                font-size:22px;
                margin-right:17px;
            }
            &:not(:last-child){
                margin-bottom:26px;
            }
        }
        &:not(:last-child){
            margin-right:200px;
        }
    }
}
`

export const DescriptionAmenitiesTitle = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props) => props.theme.DescriptionAmenitiesTitle};
margin-bottom:29px;
`

export const DescriptionButtonMore = styled.button`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
margin-top:61px;
padding:10px 31px 11px 31px;
background-color: #3B71FE;
border-radius: 47px;
border:transparent;
`


// ========== Booking Details ======
export const BookingCard = styled.div`
padding:20px 46px 31px 46px;
margin-top:105px;
background-color:${(props) => props.theme.BookingCardBg};
border: ${(props) => props.theme.BookingCardBorder};
border-radius: 20px;
p{
    font-weight: normal;
font-size: 14px;
line-height: 21px;
text-align:center;
color: #777E91;
margin:0;
}
`
export const BookingCardPrice = styled.div`
display:flex;
justify-content:space-between;
padding-bottom:17px;
border-bottom: ${(props) => props.theme.BookingCardPriceBorder};
margin-bottom:20px;
button{
    padding:4px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;  
    color: #FFFFFF;
background-color: #145CE6;
border-radius: 25px;
border:transparent;
},
div{
    font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color:${(props) => props.theme.BookingCardPriceColor} ;
span{
    color: #84878B;
    font-size:20px;
    margin-right:10px;
}
small{
    font-weight: normal;
font-size: 18px;
line-height: 23px;
color: #B1B5C4;
}
}

`

export const BookingCardTravelers = styled.div`
display:flex;
flex-wrap:wrap;
div{
    display:inline;
    &:not(:last-child){
        margin-right:14px;
    }
    input{
        border:transparent;
        display:block;
        padding:12px 12px 12px 12px;
        width:152px;
        color:${(props) => props.theme.BookingCardTravelersInputColor};
        border-radius: 10px;
        margin-bottom:20px;
        background-color:${(props) => props.theme.BookingCardTravelersInput}  ;
    }
    label{
        font-size: 16px;
        line-height: 24px;
        color: ${(props) => props.theme.BookingCardTravelersLabel} ;
        margin-bottom:11px;
        font-weight: 500;
    }
    select{
        display:block;
        padding:11.5px 28px  11.5px 14px;
        width:316px;
        color:${(props) => props.theme.BookingCardTravelersInputColor};
        border-radius: 10px;
        border:transparent;
        background-color:${(props) => props.theme.BookingCardTravelersSelect} ;
    }
}
`

export const ExtraFeature = styled.div`
margin:20px 0px 12px 0px;
div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    &:not(:last-child){
        margin-bottom:14px;
    }div{
        input{
            margin-right:10px;
        }
        label{
            font-size: 14px;
            line-height: 21px;
            color:${(props) => props.theme.ExtraFeatureColor} ;
            font-weight: normal;
        }
    }
    span{
        font-weight: 500;
        font-size: 14px;
        line-height: 27px;
        text-align: right;
        color: #B1B5C4;
        font-family: Roboto;
    }
}
`

export const ExtraFeatureTitle = styled.h5`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 27px;
color:${(props) => props.theme.ExtraFeatureTitle};
margin:20px 0px 11px 0px;
`

export const FeaturePriceTitle = styled.h5`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeaturePriceTitle} ;
margin:11px 0px 11px 0px;
`
 export const FeaturePrice = styled.div`
 background-color:${(props) => props.theme.FeaturePriceBg} ;
border-radius: 10px;
padding:13px 20px 0px 20px;
div{
    display:flex;
    justify-content:space-between;
    &:not(:last-child){
        margin-bottom:14px;
    }
    div{
        font-size: 14px;
        line-height: 21px;
        color:${(props) => props.theme.FeaturePriceColor} ;
        font-weight: normal;
    }
    span{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 27px;
        text-align: right;
        color: ${(props) => props.theme.FeaturePriceColor};
        font-family: Roboto;
    }
}
 `

 export const FeatureTotal = styled.div`
 display:flex;
 justify-content:space-between;
align-items:center;
 margin-top:12px;
 p{
     margin:0;
     font-size: 16px;
     line-height: 24px;
     color:${(props) => props.theme.FeatureTotalColor} ;
     font-weight: 500;
 }
 span{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    text-align: right;
    padding-right:18px;
    color:${(props) => props.theme.FeatureTotalspanColor};
 }
 `

export const BookingCardButton = styled.button`
width:100%;
padding:11px 0;
border:transparent;
background-color: #316BFF;
border-radius: 12px;
margin:23px 0px 12px 0px;
a{
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    text-decoration:none;
}

`


// ========= Payment =========

export const PaymentBreadCrumb = styled.div`
padding:40px 0 0 0;
span{
    margin:0 10px 0 7px;
}
background-color:${(props) => props.theme.HotelListTravelersBg};

span{
    margin:0px 10px 0px 7px;
}
a{
    color:${(props) => props.theme.BreadCrumbColor} !important;;
}
.active{
    color:${(props) => props.theme.BreadCrumbColor_Active} !important;
}
span{
    color:${(props) => props.theme.BreadCrumbColor};
}

`

export const PaymentTour = styled.div`
margin-bottom:40px;
h4{
    margin-bottom:30px;
    font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color:${(props) => props.theme.PaymentTourTitleColor} ;
}

`

export const InputContent = styled.div`
position:relative;
padding:6px 0 8px 20px;
background-color:${(props) => props.theme.InputContentBg} ;
border-radius: 15px;
max-width:470px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.InputContentColor};
&:not(:last-child){
    margin-bottom:20px;
}
input{
    border:none;
    background-color:transparent;
    font-size: 16px;
    line-height: 24px;
    color:${(props) => props.theme.InputColor} ;
    font-weight: 500;
}
span{
    position:absolute;
    right:22px;
    top:16px;
    color: #84878B;
    font-size:20px;
}
label{
    display:block;
}
`

export const CreditCard = styled.div`
h4{
    font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.PaymentTourTitleColor};
margin-bottom:23px;
}
`

export const ConfirmTitle = styled.h3`
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
max-width:495px;
color: ${(props) => props.theme.ConfirmTitleColor};
margin-bottom:40px;
padding-bottom:24px;
border-bottom:${(props) => props.theme.ConfirmTitleBorder};
`

export const PaymentCards = styled.div`
display:flex;
padding-bottom:30px;
margin-bottom:40px;
border-bottom:${(props) => props.theme.PaymentCardsBorder};
max-width:365px;
div{
    width:96px;
    height:48px;
    background-color:${(props) => props.theme.PaymentCardsBg} ;
    border-radius: 6px;
    text-align:center;
    border:${(props) => props.theme.PaymentCardsdivBorder}  ;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    &:active{
        opacity: 0.67;
        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        background-color: rgba(47, 128, 237, 0.05);
        border: 0.5px solid #145CE6;
        span{
            display:block;
            display:flex;
            align-items:center;
            background-color: #3B71FE;
            color:white;
        }

    }
    :not(:last-child){
        margin-right:11px;
    }
    :nth-child(4){
        display:${(props) => props.theme.PaymentCardscard4};
        align-items:center;
        display:flex;
    }
    span{
        width:17px;
        height:17px;
        border-radius:50%;
        display:flex;
        align-items:center;
        background-color: #3B71FE;
        position:absolute;
        top:-6px;
        right:-5px;
        display:none;
    }
}

`


export const Alliance = styled.div`
display:flex;
margin-bottom:21px;

`
export const UnionCardMaster = styled.div`
width:335px;
max-height:162px;
padding:27px 29px 18px 26px;
background-color: #CED9FD;
border-radius: 20px;
margin-right:20px;
img{
    margin-bottom:26px;
}

`

export const UnionCardVisa = styled.div`
width:335px;
max-height:162px;
padding:27px 22px 20px 24px;
background-color: #BDDBA6;
border-radius: 20px;
img{
    margin-bottom:26px;
}
`

export const CardMasterInfo = styled.div`
display:flex;
justify-content:space-between;
align-items:top;
i{
    svg{
        color:#84878B;
        font-size:25px;
        margin-right:-8px;
    }
   
}
`

export const CardMasterPinCode = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-end;
div{
    span{
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: -0.02em;
        color: #3D4852;
        margin-bottom:3px;
        display:block;
    }
}
p{
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #3D4852;
    font-weight: 500;
}
`
export const CreditInform = styled.div`
max-width:471px;
input{
    display:block;
    padding:13px 0 13px 20px;
    border:${(props) => props.theme.CreditInformInputBorder} ;
    border-radius: 10px;
    background-color:${(props) => props.theme.CreditInformInputBg} !important;
    color:${(props) => props.theme.CreditInformInputColor} !important;
    &:active{
        border: 1px solid #878CFF;
    }
};
div{
    display:inline-block;
    input{
        width:214px;
        background-color:${(props) => props.theme.CreditInformInputBg} !important;
       
    } &:not(:last-child){
            margin-right:43px;
        };
};
label{
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.CreditInformTitleColor};
    margin : 19px 0 12px 0;
    font-weight: normal;
}
`
export const InputNumber = styled.input`
width:100%;
`


export const SaveCard = styled.div`
margin-top:18px;
input{
    margin-right:12px;
}
label{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    color:${(props) => props.theme.SaveCardColor} ;
    font-family: Roboto;
}
button{
    margin-top:34px;
    display:block;
    border-radius: 36px;
    padding:11.5px 20px;
    border:transparent;
    background-color: #3B71FE;
    a{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        font-family: Roboto;
        text-decoration:none;
    }
}

`


export const HotelsPaymentInfo = styled.div`
background-color:${(props) => props.theme.HotelsPaymentInfoBg}; 
border:${(props) => props.theme.HotelsPaymentInfoBorder} ;
box-sizing: border-box;
border-radius: 20px;
padding:40px 35px 36px 35px;
p{
    font-size: 18px;
    line-height: 23px;
    color:${(props) => props.theme.HotelsPaymentInfoColor};
    font-weight: 500;
    margin-bottom:14px;
}
`

export const PaymentRooms = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.HotelsPaymentRoomsColor} ;
padding-bottom:15px;
margin-top:32px;
border-bottom:${(props) => props.theme.HotelsPaymentRoomsBorder} ;
display:inline-block;
`

export const PaymentRegistr = styled.div`
display:flex;
flex-wrap:wrap;
div{
    margin-top:20px;
    font-size: 14px;
    line-height: 21px;
    color:${(props) => props.theme.HotelsPaymentRegistrColor};
    font-weight: 500;
    width:48%;
    &:nth-child(1){
        border-right:${(props) => props.theme.HotelsPaymentRegistrBorder} ;
        margin-right:12px;
    }
}
span{
    display:block;
    font-size: 16px;
    line-height: 24px;
    color:${(props) => props.theme.HotelsPaymentRegistrspanColor} ;
    font-weight: 500;
}
`

export const HotelsPaymentRew = styled.div`
display:flex;
align-items:center;
margin-bottom:26px;
span{
    margin-left:12px;
    color:${(props) => props.theme.HotelsPaymentRewColor} ;
}
small{
    font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #84878B;
}

`


export const HotelsPaymentInfoImg = styled.div`
border-radius: 10px;
overflow:hidden;
img{
    width:100%;
    border-radius: 10px;
    object-fit:contain;
    object-position:center;
}
`

export const BookedDetailsTitle = styled.h6`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 27px;
color:${(props) => props.theme.BookedDetailsTitleColor} ;
margin:40px 0;

`

export const BookedDetails = styled.div`
div{
    display:flex;
    justify-content:space-between;
    
    div{
        font-size: 16px;
        line-height: 24px;
        color:${(props) => props.theme.BookedDetailsColor};
        font-weight: 500;
        &:not(:last-child){
            margin-bottom:20px;
        }
    }
    span{
        font-size: 16px;
        line-height: 24px;
        color:${(props) => props.theme.BookedDetailsspanColor};
        font-weight: 500;
    }
}
p{
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.BookedDetailsParagColor};
    font-weight: 500;
    text-align:center;
    margin:30px 0 0 0;
}
`
export const Total =styled.div`
padding:7px 8px 9.5px 12px;
background-color:${(props) => props.theme.TotalBg} ;
border-radius: 6px;
display:flex;
align-items:center;
div{
    font-size: 16px;
    line-height: 24px;
    color:${(props) => props.theme.TotalColor} !important ; 
    font-weight: 500;
    margin:0 !important;
}
`
// ========== Theme =========


export const DarkTheme = {
    backgroundColor: 'blue',
    cardBg: 'grey',
    color: 'white',
    boxShadow: '',
    fontSize: '20px',
    HaederBack: '#222529',
    HeaderLogoDark: 'block',
    HeaderLogoLight: 'none',
    CurrencyHeader: '#E7ECF3',
    CurrencyBody: '#222529',
    CurrencyBodyBorder: '1px solid #3B3E44',
    CurrencyColor: '#F4F5F6',
    LanguageColor: '#FCFCFD',
    LanguageButtonActivBg: 'rgba(53, 57, 69, 0.3)',
    BelldropdownColor: '#E7ECF3',
    CurrencyActiveBg: 'rgba(53, 57, 69, 0.2)',
    BellDropdownBorderRight: '1px solid  #3B3E44',
    BellDropdownBodyBorder: '1px solid  #3B3E44',
    BellDropdownBodyBG: '#222529',
    BellNotification_TextColor: '#B1B5C4',
    ProfileDropdownBodyBB: '1px solid #3B3E44',
    ProfileDropdownBodyBR: '20px',
    ProfileDropdownBodyBg: '#222529',
    ProfileDropdownHeaderBg: ' #FCFCFD',
    ProfileDropdownHeaderColor: '#F4F5F6',
    ProfileDropdownBodyColor: '#F4F5F6',
    ProfileDropdownBodyIcon: '#B1B5C4',
    BreadCrumbColor:'#E7ECF3',
    BreadCrumbColor_Active:'#84878B ',
    HotelListTravelersBg:' #141416',
    SuccessTextcolor:'#B1B5C4',
    SuccessPageBg:'#141416',
    SuccesTitle:'#FCFCFD',
    SuccesTitleBorder:'1px solid #3B3E44',
    SuccesInformTextColor:' #F4F5F6',
    SuccesRewColor:'#B1B5C4',
    SuccesTravellerBg:' #222529',
    SuccesTravellerColor:'#FCFCFD',
    ReserveDetailsBg:'#222529',
    ReserveDetailsBorder:'1px solid transparent',
    ReserveDetailsTitleColor:'#FCFCFD',
    ReserveDetailsColor:'#E7ECF3',
    ReserveDetailsCode:'#84878B',
    ConfirmTitleColor:' #FFFFFF',
   PaymentCardsBorder:'2px solid #3B3E44',
   ConfirmTitleBorder:'2px solid #222529',
   PaymentTourTitleColor:'#E7ECF3',
   InputContentBg:' #222529',
   InputContentColor:'#B1B5C4',
   InputColor:'#777E91',
   PaymentCardsBg:'rgba(35, 38, 47, 0.4)',
   PaymentCardsdivBorder:'0.5px solid transparent',
   PaymentCardscard4:'none',
   CreditInformTitleColor:'#E7ECF3',
   CreditInformInputBg:'#141416',
   CreditInformInputBorder:'2px solid #222529',
   CreditInformInputColor:'#84878B',
   SaveCardColor:' #E7ECF3',
   HotelsPaymentInfoBg:'#222529',
   HotelsPaymentInfoBorder:'2px solid #3B3E44',
   HotelsPaymentInfoColor:' #FCFCFD',
   HotelsPaymentRewColor:'#FFFFFF',
   HotelsPaymentRoomsColor:'#FCFCFD',
   HotelsPaymentRoomsBorder:'1px solid #3B3E44',
   HotelsPaymentRegistrColor:' #F4F5F6',
   HotelsPaymentRegistrBorder:'none',
   HotelsPaymentRegistrspanColor:'#B1B5C4',
   BookedDetailsTitleColor:'#FFFFFF',
   BookedDetailsColor:'#E7ECF3',
   BookedDetailsspanColor:'#E7ECF3',
   TotalBg:'#3B3E44',
   TotalColor:'#FCFCFD',
   BookedDetailsParagColor:'#B1B5C4',
   HotelDetailsTitleColor:'#FCFCFD',
   HotelDetailCardRatingColor:'#FCFCFD',
   HotelDetailCardRatingspanColor:'#B1B5C4',
   DetailInfoBtnBg:'#3B3E44 !important',
   DetailInfoBtnColor:'#F4F5F6 !important',
   DetailInformTitle:'#F4F5F6',
   DetailInformText:'#84878B',
   TabContentBorder:'1px solid   #E7ECF3',
   DetailInformTextBorder:'1px solid #222529',
   TabContentColor:'#E7ECF3',
   DescriptionTextColor:'#B1B5C4',
   DescriptionFeaturesTitle:'#E7ECF3',
   DescriptionFeatures:'2px solid #222529',
   FeaturesColor:'#B1B5C4',
   DescriptionAmenitiesTitle:'#E7ECF3',
   DescriptionAmenitiesColor:'#B1B5C4',
   BookingCardBg:'#222529',
   BookingCardPriceColor:'#FCFCFD',
   BookingCardBorder:'1px solid #3B3E44',
   BookingCardPriceBorder:'1px solid #3B3E44',
   BookingCardTravelersLabel:'#FCFCFD',
   BookingCardTravelersInput:'#3B3E44',
   BookingCardTravelersSelect:'#3B3E44',
   BookingCardTravelersInputColor:'#E7ECF3',
   ExtraFeatureTitle:' #FCFCFD',
   ExtraFeatureColor:'#E7ECF3',
   FeaturePriceTitle:'#F4F5F6',
   FeaturePriceBg:' #3B3E44',
   FeaturePriceColor:'#E7ECF3',
   FeatureTotalColor:'#F4F5F6',
   FeatureTotalspanColor:'#E7ECF3',
   TravelersSectionBg:'#222529',
   PassengerDropdownHeaderColor:'#FFFFFF',
   PassengerDropdownHeaderIcon:'#B1B5C4',
   CheckFilterBg:'#3B3E44',
   CheckFilterColor:'#FCFCFD',
   CheckInputColor:'#B1B5C4',
   ArrowCircleBg:'#42464B',
   ArrowCircleColor:'#F4F5F6',
   CalendarBg:'#222529',
   SearchPropertyTextColor:' #FFFFFF',
   PropertyInputBg:'#222529',
   PropertyInputBorder:'1px solid #222529',
   PopularFilterBorder:'1px solid #3B3E44',
   PopularFilterTitle:'#E7ECF3',
   PropertyMenuColor:'#E7ECF3',
   PriceFilterTitle:'#FFFFFF',
   TextInputBg:'#141416',
   TextInputColor:'#316BFF',
   TextInputspanColor:'#F4F5F6',
   HotelsinfoCardTitleColor:'#FFFFFF',
   HotelsinfoCardRating:'#B1B5C4',
   HotelsinfoCardRatingSmall:'#B1B5C4',
   ImportantInformationIconColor:'#B1B5C4',
   ImportantInformationtextColor:'#FCFCFD',
   HotelsPriceBg:'#222529',
   HotelsPriceColor: '#FFFFFF',
   ViewAllButtonColor:'#FFFFFF',
   SearchedPlacesTitleColor:'#F4F5F6',
   SearchedCardTitleColor:'#E7ECF3',
   SearchedCardTextColor:'#777E90',
   SearchedPlacesCardBorder:'1px solid #3B3E44 ' ,
   SearchedPlacesCardBg:'#222529',
   HomePageBg:' #141416',
   DestinationFeatureTitleColor:'#FFFFFF',
   DestinationFeatureTextColor:'#B1B5C4',
   TopTitleColor:' #FFFFFF',
   TopTextColor:'#B1B5C4',
   ExploreTitleColor:' #FFFFFF',
   ExploreTextColor:'#B1B5C4',
   ExploreCardBg:' #222529',
   ExploreCardBorder:'1px solid #3B3E44',
   ExploreRetsmall:'#B1B5C4',
   ExploreRetColor:' #E7ECF3',
   ExploreCardTitleColor:' #FCFCFD',
   ExploreIconsColor:'#E7ECF3',
   CitesBg:'#18191B',
   CitesTitleColor:'#FFFFFF',
   CitesTextColor:'#B1B5C4',
   CitesCardBg:'#222529',
   CitesNameColor:'#FCFCFD',
   CitesRatingColor: '#B1B5C4',
   CitesPriceColor:'#F4F5F6',
   TravelTitleColor:'#FFFFFF',
   TravelTextColor:'#84878B',
   FooterSectionBg:'#222529',
   FooterText:'#E7ECF3',
   FooterTitle:'#FFFFFF',
   FooterMenuTitle:'#E7ECF3',
   MoudeBg:'#3B3E44',
   MoudeColor:'#E7ECF3',
   SearchFilterBg:'#222529',
   TabStyleSelectedColor:'#FCFCFD',
   PassengerDropdownBg:'#222529',
   PassengerDropdownColor:'#FCFCFD',
   PassengerDataInfoColor:'#84878B',
   PassengerFilterColor:'1px solid #3B3E44',
   MoudeCheckBg:'#474A52',
   MoudebtnColor:'#84878B',
   MoudeCheckColor: '#E7ECF3',
   SelectMenuBg:'#222529',
   SelectMenuColor:'#E7ECF3'
   
  
  

    
};

export const LightTheme = {
    backgroundColor: 'yellow',
    cardBg: 'pink',
    color: 'black',
    fontSize: '8px',
    HaederBack: '#fff',
    HeaderLogoDark: 'none',
    HeaderLogoLight: 'block',
    CurrencyHeader: '#84878B',
    CurrencyBody: '#fff',
    CurrencyBodyBorder: '1px solid #E7ECF3',
    CurrencyColor: '#3B3E44',
    LanguageColor: '#3B3E44',
    LanguageButtonActivBg: '#F4F5F6',
    BelldropdownColor: '#84878B',
    CurrencyActiveBg: '#F4F5F6',
    BellDropdownBorderRight: '1px solid #E7ECF3',
    BellDropdownBodyBorder: '1px solid #E7ECF3',
    BellDropdownBodyBG: '#FFFFFF',
    BellNotification_TextColor: ' #84878B',
    ProfileDropdownBodyBB: '1px solid #E7ECF3',
    ProfileDropdownBodyBR: '16px',
    ProfileDropdownBodyBg: '#fff',
    ProfileDropdownHeaderBg: '#222529',
    ProfileDropdownHeaderColor: '#23262F',
    ProfileDropdownBodyColor: '#23262F',
    ProfileDropdownBodyIcon: '#777E90',
    BreadCrumbColor:'#3B3E44',
    BreadCrumbColor_Active:'#B1B5C4 ',
    HotelListTravelersBg:'#FAFAFB',
    SuccessTextcolor:'#3B3E44',
    SuccessPageBg:'#FAFAFB',
    SuccesTitle:'#3B3E44',
    SuccesTitleBorder:'1px solid #E7ECF3',
    SuccesInformTextColor:'#23262F',
    SuccesRewColor:'#353945',
    SuccesTravellerBg:' #F4F4F6',
    SuccesTravellerColor:'#353945',
    ReserveDetailsBg:'#F4F4F6',
    ReserveDetailsBorder:'1px solid #F0EFEF',
    ReserveDetailsTitleColor:'#23262F',
    ReserveDetailsColor:'#777E91',
    ReserveDetailsCode:'#353945',
    ConfirmTitleColor:'#23262F',
    ConfirmTitleBorder:'2px solid #F4F5F6',
    PaymentCardsBorder:'2px solid #F4F5F6',
    PaymentTourTitleColor:'#141416',
    InputContentBg:'#F4F4F6',
    InputContentColor:'#141416',
    InputColor:'#84878B',
    PaymentCardsBg:'#FFFFFF',
    PaymentCardsdivBorder:'0.5px solid #E6E6E6',
    PaymentCardscard4:'block',
    CreditInformTitleColor:'#353945',
    CreditInformInputBg:'#F4F5F6',
    CreditInformInputBorder:'2px solid #EAEAEA' ,
    CreditInformInputColor:'#4F4F4F',
    SaveCardColor:'#4F4F4F',
    HotelsPaymentInfoBg:'#FFFFFF',
    HotelsPaymentInfoBorder:' 2px solid #E7ECF3',
    HotelsPaymentInfoColor:'#141416',
    HotelsPaymentRewColor:'#222529',
    HotelsPaymentRoomsColor:'#84878B',
    HotelsPaymentRoomsBorder:'1px solid #EEEEEE',
    HotelsPaymentRegistrColor:'#B1B5C4',
    HotelsPaymentRegistrBorder:'2px solid #F4F5F6',
    HotelsPaymentRegistrspanColor:'#84878B',
    BookedDetailsTitleColor:'#333333',
    BookedDetailsColor:'#84878B',
    BookedDetailsspanColor:'#353945',
    TotalBg:'#F4F5F6',
    TotalColor:'#23262F',
    BookedDetailsParagColor:'#B1B5C4',
    HotelDetailsTitleColor:'#252525',
    HotelDetailCardRatingColor:'#84878B',
    HotelDetailCardRatingspanColor:'#3B3E44',
    DetailInfoBtnBg:'transparent',
    // DetailInfoBtnColor:'transparent'
    DetailInformTitle:'#23262F',
    DetailInformText:'#777E91',
    TabContentBorder:'1px solid #3B3E44',
    DetailInformTextBorder:'1px solid #E6E8EC',
    TabContentColor:'#23262F',
    DescriptionTextColor:'#353945',
    DescriptionFeaturesTitle:'#23262F',
    DescriptionFeatures:'2px solid #E6E8EC',
    FeaturesColor:'#4F4F4F',
    DescriptionAmenitiesTitle:'#23262F',
    DescriptionAmenitiesColor:'#353945',
    BookingCardBg:'#FFFFFF',
    BookingCardPriceColor:' #141416',
    BookingCardBorder:'1px solid #EAEAEA',
    BookingCardPriceBorder:'1px solid #E6E8EC',
    BookingCardTravelersLabel:'#84878B',
    BookingCardTravelersInput:'#F4F5F6',
    BookingCardTravelersSelect:'#F4F5F6',
    BookingCardTravelersInputColor:'#353945',
    ExtraFeatureTitle:'#777E91',
    ExtraFeatureColor:'#353945',
    FeaturePriceTitle:'#777E91',
    FeaturePriceBg:'#F4F5F6',
    FeaturePriceColor:'#353945',
    FeatureTotalColor:'#777E91',
    FeatureTotalspanColor:'#353945',
    TravelersSectionBg:'#fff',
    PassengerDropdownHeaderColor:'#3B3E44',
    PassengerDropdownHeaderIcon:'#84878B',
    CheckFilterBg:'#F4F5F7',
    CheckFilterColor:'#3B3E44',
    CheckInputColor:'#84878B'   ,
    ArrowCircleBg:'#fff',
    ArrowCircleColor:'#B1B5C4',
    CalendarBg:'#FFFFFF',
    SearchPropertyTextColor:'#333333',
    PropertyInputBg:'#FFFFFF',
    PropertyInputBorder:'1px solid #E7ECF3',
    PopularFilterBorder:'1px solid #E7ECF3',
    PopularFilterTitle:'#141416',
    PropertyMenuColor:'#3B3E44',
    PriceFilterTitle:'#141416',
    TextInputspanColor:'#3B3E44',
    HotelsinfoCardTitleColor:'#23262F',
    HotelsinfoCardRating:'#84878B',
    HotelsinfoCardRatingSmall:'#3B3E44',
    ImportantInformationIconColor:'#84878B',
    ImportantInformationtextColor:'#3B3E44',
    HotelsPriceBg:'#F4F5F6',
    HotelsPriceColor:'#23262F',
    ViewAllButtonColor:'#141416',
    SearchedPlacesTitleColor:'#23262F',
    SearchedCardTitleColor:'#3B3E44',
    SearchedCardTextColor:'#84878B',
    SearchedPlacesCardBg:'#FFFFFF',
    HomePageBg:'#E5E5E5',
    SearchedPlacesCardBorder:'1px solid #E7ECF3',
    DestinationFeatureTitleColor:'#141416',
    DestinationFeatureTextColor:'#3B3E44',
    TopTitleColor:'#141416',
    TopTextColor:'#777E90',
    ExploreTitleColor:'#141416',
    ExploreTextColor:'#84878B',
    ExploreCardBg:'#FFFFFF',
    ExploreCardBorder:'1px solid #E7ECF3',
    ExploreRetsmall:'#84878B',
    ExploreRetColor:'#3B3E44',
    ExploreCardTitleColor:'#3B3E44',
    ExploreIconsColor:'#B1B5C4',
    CitesBg:'#F5F5F5',
    CitesTitleColor:'#222529',
    CitesTextColor:'#3B3E44',
    CitesCardBg:'#fff',
    CitesNameColor:'#282832',
    CitesRatingColor:'#3B3E44',
    CitesPriceColor:'#3B3E44',
    TravelTitleColor:'#141416',
    TravelTextColor:'#84878B',
    FooterSectionBg:'#F4F5F6',
    FooterText:'#84878B',
    FooterTitle:'#222529',
    FooterMenuTitle:'#84878B',
    MoudeBg:'#FFFFFF',
    MoudeColor:'#3B3E44',
    SearchFilterBg:'#fff',
    TabStyleSelectedColor:'#3B3E44',
    PassengerDropdownBg:'#fff',
    PassengerDropdownColor:'#777E91',
    PassengerDataInfoColor:'#B1B5C4',
    PassengerFilterColor:'1px solid #E6E8EC',
    MoudeCheckBg:'#FCFCFD',
    MoudebtnColor:'#868B90',
    MoudeCheckColor: '#3B3E44',
    SelectMenuBg:'#FFFFFF',
    SelectMenuColor:'#777E91'
   
   
};




