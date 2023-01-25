import React from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";


const StyledCard = styled.div`
display:flex;
flex-direction: column;
position:sticky;
max-width:15%;
border: solid gray 2px;
border-radius: 3px;
background: white;
`

const StyledCards = styled.div`
display: flex;
justify-content:space-around;
`
const Name = styled.h2`
background: black;
opacity: 55%;
color: white;
position:absolute; 
bottom:15%;
font-size: 18px;
`

const Img = styled.img`
padding-top: 5px
`


export const Favorites = ({myFavorites}) => {

    const [favs, setFavs] = React.useState([])
    React.useEffect(() => {
        setFavs(myFavorites,)
     
    }, [myFavorites])

    return (
        <StyledCards>
            {favs.map(favorito =>

                <StyledCard>
                    <Img src={favorito.image} alt="" />
                    <Name>{favorito.name}</Name>
                </StyledCard>
            )}
                
        </StyledCards>
    )
}




function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
