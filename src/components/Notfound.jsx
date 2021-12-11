import React from 'react'
import styled from 'styled-components'


const NotfoundPage = styled.div`
max-width:1520px;
h1{
    text-align:center;
}
img{
    width:100%;
}
`

const Notfound = () => {
    return (
        <NotfoundPage>
            <h1>404 NotFound!</h1>
            <img src="/assets/img/not-found.jpg" alt="not-found" />
        </NotfoundPage>
    )
}

export default Notfound
