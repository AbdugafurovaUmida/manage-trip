import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from "react-icons/hi";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { useTranslation } from 'react-i18next';
import RangeSlider from 'react-bootstrap-range-slider';


const SearchProperty = styled.div`
p{
    font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.SearchPropertyTextColor} ;
}

`

const PropertyInput = styled.div`
position:relative;
background-color:${(props) => props.theme.PropertyInputBg};
border:${(props) => props.theme.PropertyInputBorder} ;
border-radius: 10px;
padding:16px 18.5px 13px 20px;
// border-bottom:1px solid #E7ECF3;
display:flex;
input{
    width:100%;
    border:none;
    background-color:transparent;
},
span{
    color:#B1B5C4;
}

}
`
const PopularFilter = styled.div`
margin-top:30px;
margin-bottom:0px;
border-bottom:${(props) => props.theme.PopularFilterBorder};
ul{
    list-style:none;
    padding:0px;
},
h4{
    font-size: 18px;
    line-height: 23px;
    color: ${(props) => props.theme.PopularFilterTitle};
    margin: 30px 0 13px 0;
    font-weight: 500;
}

`

const PriceFilter = styled.div`
padding:6px 0px 15px 0;
border-bottom:${(props) => props.theme.PopularFilterBorder};
.range-slider{
    width:230px !important;
}
h4{
    padding-left:4px;
    // padding:46px 0 15px;
    font-size: 18px;
    line-height: 23px;
    color: ${(props) => props.theme.PriceFilterTitle};
    margin:30px 0px 13px 0;
    font-weight: 500;
    margin-bottom:40px;
}
div{
    display:flex;
    justify-content:space-between;
    .text-input{
       padding-left:10px;
       width:60px;
       height:30px;
       margin-left:16px;
       border: 2px solid #316BFF;
       border-radius: 9px;
       background-color:${(props) => props.theme.TextInputBg};
       color:${(props) => props.theme.TextInputColor};
    }
    span{
        color:${(props) => props.theme.TextInputspanColor};
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

}
`


const Property = styled.div`
padding-top:30px;
border-bottom:${(props) => props.theme.PopularFilterBorder};
h4{
    padding:16px 0 15px;
    font-size: 18px;
    line-height: 23px;
    color:  ${(props) => props.theme.PriceFilterTitle};
    font-weight: 500;
    margin:0;
}

   
`

const Boudget = styled.div`
padding-top:30px;
border-bottom:${(props) => props.theme.PopularFilterBorder};
h4{
    padding:16px 0 15px;
    font-size: 18px;
    line-height: 23px;
    color:  ${(props) => props.theme.PriceFilterTitle};
    margin:0;
    font-weight: 500;
}
`

const Facilities = styled.div`
padding-top:30px;
h4{
    color: ${(props) => props.theme.PriceFilterTitle};
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    margin-bottom:13px;
}

`

const Checkbox = styled.input`
margin-right:12px;
width:20px;
height:20px;
border-radius:10px;
font-size:7px;
`

const FilterCount = styled.div`
margin-left:auto;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #84878B;
`

const PropertyMenu = styled.li`
display:flex;

label{
    font-size: 14px;
    line-height: 21px;
    color:${(props) => props.theme.PropertyMenuColor} ;
    font-weight: normal;
}
:not(:last-child){
    margin-bottom:14px;
}
`

const MoreBtn = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #145CE6;
background-color:transparent;
border:transparent;
margin:15px 0px;
padding:0;
`


const HotelsFilter = () => {

    const { t } = useTranslation()

    // ======== Range =======
    const [value1, setValue1] = useState(50);

    const handlechange = (e) => {
         setValue1(e.target.value)
         console.log(e.target.value)
        
    }

    // ========= filters-checkbox =======

    const filters = ['Hotels', 'Breakfast and Dinner', 'Free Cancellation', 'No prepayment'];
    const propertyType = ['Hotels', 'Apertments', 'Resort'];
    const budget = [75, 75 + 'to' + 125, 125 + 'to' + 200, 200 + 'to' + 300, 300];
    const facilities = ['Outdoor Sports', 'Berbeque', 'Living Room', 'Room Service', 'Swimming Pool', 'Spa']


    const handleclick = (e) => {
        console.log(e.target.value)

    }


    return (
        <form action='Get' >
            <SearchProperty>
                <p>{t('SearchProperty-title')}</p>
                <PropertyInput>
                    <label htmlFor="check"></label>
                    <input type="text" id='check' placeholder={`${t('SearchProperty-title')}`} />
                    <span><HiOutlineSearch /></span>
                </PropertyInput>
            </SearchProperty>
            <PopularFilter>
                <h4>{t('popular-filter-title')}</h4>
                <ul>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={filters[0]} id='hotels' name='hotels' />
                        <label htmlFor="hotels">{t('Hotels')}</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={filters[1]} id='breakfast' name='breakfast' />
                        <label htmlFor="breakfast">{t('Breakfast-Dinner')}</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={filters[2]} id='cancellation' name='cancellation' />
                        <label htmlFor="cancellation">{t('Cancellation')}</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={filters[3]} id='prepayment' name='prepayment' />
                        <label htmlFor="prepayment">{t('prepayment')}</label></PropertyMenu>
                </ul>
                <MoreBtn type='button'>{t('See-more')}</MoreBtn>
            </PopularFilter>
            <PriceFilter>
                <h4>{t('Price-Range')}</h4>
                <div>
                    <RangeSlider
                        value={value1}
                        onChange={handlechange}
                        tooltipPlacement='top'
                        tooltip='on'
                        max={150}
                        min={50}
                    />
                    <input type="text" className='text-input' value={value1} onChange={handlechange}/>
                </div>
                <div>
                    <span>$50</span>
                    <span style={{ marginRight: '30px' }}>$150</span>
                </div>
            </PriceFilter>
            <Property>
                <h4>{t('property-title')}</h4>
                <ul>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={propertyType[0]} id="hotels2" name='hotels2' />
                        <label htmlFor="hotels2" >{t('Hotels')}</label> <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={propertyType[1]} id="apertment" name='apertment' />
                        <label htmlFor="apertment" >{t('Apertments')}</label> <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={propertyType[2]} id="resort" name='resort' />
                        <label htmlFor="resort">{t('Resort')}</label> <FilterCount>108</FilterCount></PropertyMenu>
                </ul>
                <MoreBtn type='button'>{t('See-more')}</MoreBtn>
            </Property>
            <Boudget>
                <h4>{t('Your-budget')}</h4>
                <ul>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={budget[0]} id='75' name='budget' />
                        <label htmlFor="75">{t('less-than')} $75</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={budget[1]} id='125' name='budget' />
                        <label htmlFor="125">$75 {t('to')} 125</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={budget[2]} id='200' name='budget' />
                        <label htmlFor="200">$125 {t('to')} 200</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={budget[3]} id='200-300' name='budget' />
                        <label htmlFor="200-300">$200 {t('to')} $300</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} value={budget[4]} id='300' name='budget' />
                        <label htmlFor="300">{t('Greater-than')} $300</label></PropertyMenu>
                </ul>
                <MoreBtn type='button'>{t('See-more')}</MoreBtn>
            </Boudget>
            <Facilities>
                <h4>{t('Facilities')}</h4>
                <ul>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='sports' name='sport-type' value={facilities[0]} />
                        <label htmlFor="sports">{t('Sports')}</label>
                        <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='barbeque' name='barbeque' value={facilities[1]} />
                        <label htmlFor="barbeque">{t('Berbeque')}</label>
                        <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='living-room' name='living-room' value={facilities[2]} />
                        <label htmlFor="living-room">{t('Living-Room')}</label>
                        <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='room-services' name='services' value={facilities[3]} />
                        <label htmlFor="room-services">{t('Room-Service')}</label>
                        <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='swimming-pool' name='swimming' value={facilities[4]} />
                        <label htmlFor="swimming-pool">{t('Swimming-Pool')}</label>
                        <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" onClick={handleclick} id='spa' name='spa' value={facilities[5]} />
                        <label htmlFor="spa">Spa</label>
                        <FilterCount>108</FilterCount></PropertyMenu>
                </ul>
                <MoreBtn type='button'>{t('See-more')}</MoreBtn>
            </Facilities>
        </form>
    )
}

export default HotelsFilter;
