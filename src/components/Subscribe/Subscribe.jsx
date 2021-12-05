import React from 'react'
import { Container } from '../../styled'
import styled from 'styled-components'
import { useRef } from 'react'


const Subscribe =styled.section`
position:relative;
bottom:135px;
`
const SubscribeContent = styled.div`
background-image:url(/assets/img/bg.jpg);
background-color:rgba(238, 109, 82, 1);
background-size:cover;
background-repeat:no-repeat;
background-position:center center;
padding:62px 90px;
display:flex;
justify-content:space-between;
align-items:end;
border-radius: 16px;
`

const SubscribeTitle = styled.h3`
font-family: Gilroy;
font-weight: 800;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.5px;
color: #FFFFFF;
margin-bottom:16px;
`

const SubscribeText = styled.p`
font-family: 'Roboto';
font-weight: normal;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
opacity: 0.88;
max-width:370px;
margin-bottom:0;
`

const SubscribeSearch =styled.div`

`
const SubscribeInput = styled.div`
position:relative;
width:488px;
button{
    position:absolute;
    top:8px;
    bottom:8px;
    right:8px;
   padding:18px 31px;
   font-family: 'Roboto';
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;
color: #FFFFFF;
background-color: #353945;
box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
border-radius: 4px;
border:transparent;
}
input{
    width:100%;
    padding:26px 0px 22px 26px;
    background-color: #FCFCFD;
box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
border-radius: 4px;
border:transparent;
}
`


const Offer = () => {

    const subscribeRef = useRef()

    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(subscribeRef.current.value)
    }

    return (
        <Container>
            <Subscribe>
                    <form action="" onSubmit={handleSubmit}>
                <SubscribeContent>
                    <div>
                    <SubscribeTitle>Get our pro offers </SubscribeTitle>
                    <SubscribeText>Create a visual identity for your company, and an overall brand</SubscribeText>
                    </div>
                    <SubscribeSearch>
                        <SubscribeInput>
                            <input type="text" name='subscribe' ref={subscribeRef} placeholder='Type your email here'  />
                            <button type='submit'>Subscribe</button>
                        </SubscribeInput>
                    </SubscribeSearch>
                </SubscribeContent>
                    </form>

            </Subscribe>
        </Container>
    )
}

export default Offer
