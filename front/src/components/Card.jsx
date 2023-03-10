import React from 'react'
import styled from "styled-components";
import {getFavorites, addFavorites, removeFavorites } from "../redux/actions.js";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const StyledCard = styled.div`
display:flex;
flex-direction: column;
position:sticky;
max-width:15%;
border: solid gray 2px;
border-radius: 3px;
background: white;
`

const Button = styled.button`
background: red;
color: white;
border-radius: 3px;
align-self: flex-end;
margin: 2px;
`
const Name = styled.h2`
background: black;
opacity: 55%;
color: white;
position:absolute; 
bottom:15%;
font-size: 18px;
`
const Spec = styled.div`
display: flex;
justify-content:space-around;
`
const Img = styled.img`
padding-top: 5px
`
const H2 = styled.h2`
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
font-weight: lighter;
`

export const Card = ({ id, name, status, species, gender, origin, image, removeFavorites, addFavorites, myFavorites, onClose }) => {

  
   const [isFav, setIsFav] = React.useState(false)
   const handleFavorite = () => {
      isFav ? removeFavorites(id) : addFavorites({ id, name, status, species, gender, origin, image })
      setIsFav(!isFav)
   }


   React.useEffect(() => {
       for(let i =0;i<myFavorites.length; i++){
         if(myFavorites[i].id === id){
            setIsFav(true)
         }                   
      } 
   }, [myFavorites])

   return (
      <StyledCard>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <Button onClick={() => onClose(id)}>X</Button>
         <Img src={image} alt="" />
         <Link to={`/detail/${id}`}><Name>{name}</Name></Link>
         <Spec>
            <H2 >{species}</H2>
            <H2 >{gender}</H2>
         </Spec>
      </StyledCard>
   );
}



function mapDispatchToProps(dispatch) {
   return {
      addFavorites: (personaje) => {
         dispatch(addFavorites(personaje))
      },
      removeFavorites: (id) => {
         dispatch(removeFavorites(id))
      },
      getFavorites:()=>{
         dispatch(getFavorites())
      }
   }
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);