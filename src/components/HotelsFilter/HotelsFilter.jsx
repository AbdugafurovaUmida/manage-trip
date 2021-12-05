import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from "react-icons/hi";
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


const SearchProperty = styled.div`
p{
    font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #333333;
}

`

const PropertyInput = styled.div`
position:relative;
background-color: #FFFFFF;
border: 1px solid #E7ECF3;
border-radius: 10px;
padding:16px 18.5px 13px 20px;
border-bottom:1px solid #E7ECF3;
display:flex;
input{
    width:100%;
    border:none;
},
span{
    color:#B1B5C4;
}

}
`
const PopularFilter = styled.div`
margin-top:30px;
margin-bottom:0px;
border-bottom:1px solid #E7ECF3;
ul{
    list-style:none;
    padding:0px;
},
h4{
    font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
margin: 30px 0 13px 0;
}

`

const PriceFilter = styled.div`
padding:6px 0px 15px 0;
border-bottom:1px solid #E7ECF3;
h4{
    padding-left:4px;
    // padding:46px 0 15px;
    font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
margin:30px 0px 13px 0;
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
    }

}
`


const Property = styled.div`
padding-top:30px;
h4{
    padding:16px 0 15px;
    font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
margin-bottom:13px;
}

   
`

const Boudget = styled.div`
padding-top:30px;
border-bottom:1px solid #E7ECF3;
h4{
    padding:16px 0 15px;
    font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
margin-bottom:13px;
}
`

const Facilities = styled.div`
padding-top:30px;

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
    font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #3B3E44;
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

// ======== Range =======
const [ value, setValue ] = useState(50);



    return (
        <form>
            <SearchProperty>
                <p>Search location or property</p>
                <PropertyInput>
                    <label htmlFor="check"></label>
                    <input type="text" id='check' placeholder='Search location or property' />
                    <span><HiOutlineSearch /></span>
                </PropertyInput>
            </SearchProperty>
            <PopularFilter>
                <h4>Popular Filters</h4>
                <ul>
                    <PropertyMenu><Checkbox type="checkbox" /> <label htmlFor="">Hotels</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" /> <label htmlFor="">Breakfast and Dinner</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" /> <label htmlFor="">Free Cancellation</label></PropertyMenu>
                    <PropertyMenu><Checkbox type="checkbox" /> <label htmlFor="">No prepayment</label></PropertyMenu>
                </ul>
                    <MoreBtn type='button'>See More</MoreBtn>
            </PopularFilter>
            <PriceFilter>
                <h4>Price Range</h4>
                <div>
                <Form.Range
                value={value}
                onChange={e => setValue(e.target.value)}
                tooltipPlacement='top'
            tooltip='on'
                 />
                 <input type="text" className='text-input'/>
                </div>
                <div>
                    <span>$50</span>
                    <span style={{marginRight:'30px'}}>$150</span>
                </div>
            </PriceFilter>
            <Property>
            <h4>Property Type</h4>
                <ul>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Hotels</label> <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Apertments</label> <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Resort</label> <FilterCount>108</FilterCount></PropertyMenu>
                </ul>
                    <MoreBtn type='button'>See More</MoreBtn>
            </Property>
            <Boudget>
            <h4>Your budget</h4>
                <ul>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Less than $75</label></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">$75 to 125</label></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">$125 to 200</label></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">$200 to $300</label></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Greater than $300</label></PropertyMenu>
                </ul>
                    <MoreBtn type='button'>See More</MoreBtn>
            </Boudget>
            <Facilities>
            <h4>Facilities</h4>
                <ul>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Outdoor Sports</label> <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Berbeque</label> <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Living Room</label> <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Room Service</label> <FilterCount>108</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Swimming Pool</label> <FilterCount>141</FilterCount></PropertyMenu>
                    <PropertyMenu><Checkbox  type="checkbox" /> <label htmlFor="">Spa</label> <FilterCount>108</FilterCount></PropertyMenu>
                </ul>
                    <MoreBtn type='button'>See More</MoreBtn>
            </Facilities>
        </form>
    )
}

export default HotelsFilter
