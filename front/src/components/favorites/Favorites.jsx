import React from 'react'
import { connect,useDispatch } from 'react-redux';
import styled from "styled-components";
import { orderCards,filterCards,getFavorites } from '../../redux/actions.js';


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


export const Favorites = ({ myFavorites }) => {
    
    const dispatch = useDispatch()
    const [favs, setFavs] = React.useState([])
 
    React.useEffect(() => {
        setFavs(myFavorites,)
    }, [myFavorites])


   const handleDispatch=(e)=>{
    const {name,value}=e.target
    if(name==='order'){
        return dispatch(orderCards(value))
    }
    if(name==='filter'){
        return dispatch(filterCards(value))
    }
   }
   
    return (
        <div>
            <div>
                <select name='order' onClick={handleDispatch}>
                    <option value={'Ascendente'}>Ascendente</option>
                    <option value={'Descendente'}>Descendente</option>
                </select>
                <select name='filter' onClick={handleDispatch}>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Genderless'}>Genderless</option>
                    <option value={'unknown'}>unknown</option>
                </select>
            </div>
            <StyledCards>
                {favs.length?
                favs.map(favorito =>

                    <StyledCard key={favorito.name}>
                        <Img src={favorito.image} alt="" />
                        <Name>{favorito.name}</Name>
                    </StyledCard>
                )
                : <h2>No hay favoritos</h2>}
            </StyledCards>
        </div>

    )
}




function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
