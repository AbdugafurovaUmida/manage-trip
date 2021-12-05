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

// ========== Details =========

export const DetailsBreadCrumb = styled.div`
padding:40px 0 18px 100px;

`

export const HotelDetails = styled.section`
`

export const HotelDetailsTitle = styled.h2`
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #252525;
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
color: #84878B;
margin-bottom:48px;
small{
    font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #3B3E44;
margin-left:12px;
margin-right:4px;
}
`

export const DetailWrapper = styled.div`
padding:0px 100px;
`

export const DetailInfoBtn = styled.div`
padding:40px 0 20px 0;
display:flex;

button{
    background-color:transparent;
    border:transparent;
    padding:0;
    
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
color: #23262F;
margin-bottom:10px;
`

export const DetailInformText = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #777E91;
padding-bottom:22px;
border-bottom:1px solid #E6E8EC;
`


export const DetailTab = styled.div`
margin-top:30px;

`

export const DescriptionText = styled.p`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #353945;
margin-bottom:40px;
`

export const DescriptionFeaturesTitle = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #23262F;
margin-bottom:24px;
`
export const DescriptionFeatures = styled.div`
display:flex;
align-items:center;
padding-bottom:62px;
border-bottom:2px solid #E6E8EC;
`
export const FeatureWifi = styled.div`
margin-right:45px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
span{
    margin-right:10px;
    color: #4F4F4F;
    font-size:22px;
}
`

export const FeatureBathup = styled.div`
margin-right:48px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
span{
    margin-right:10px;
    color: #4F4F4F;
    font-size:22px;
}
`
export const FeatureBreakfast = styled.div`
margin-right:50px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
span{
    margin-right:10px;
    color: #4F4F4F;
    font-size:22px;
}
`

export const FeatureBed = styled.div`
margin-right:45px;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
span{
    margin-right:10px;
    color: #4F4F4F;
    font-size:22px;
}
`
export const FeatureRoom = styled.div`
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
span{
    margin-right:10px;
    color: #4F4F4F;
    font-size:24px;
}
`

export const DescriptionAmenities = styled.div`
padding:60px 0px;
div{
    display:flex;
}
`

export const DescriptionAmenitiesTitle = styled.h5`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #23262F;
margin-bottom:29px;
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
    ProfileDropdownBodyIcon: '#B1B5C4'
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
    ProfileDropdownBodyIcon: '#777E90'
};




