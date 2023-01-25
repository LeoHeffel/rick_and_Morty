import {Card} from './Card';
import styled from 'styled-components';
import { addFavorite, removeFavorite } from "../redux/actions.js";
import { connect } from 'react-redux';
const StyledCards = styled.div`
display: flex;
justify-content:space-around;
`

export  function Cards(props) {
   const { characters } = props;
   return (
   <StyledCards>
      {characters.map(personaje => <Card key={personaje.id}
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          image={personaje.image}
          onClose={props.onClose}
          removeFavorite={props.removeFavorite}
          addFavorite={props.addFavorite}
          myFavorites={props.myFavorites}
          id={personaje.id}
        />)}
   </StyledCards>)
}

function mapDispatchToProps(dispatch) {
   return {
      addFavorite: (personaje) => {
         dispatch(addFavorite(personaje))
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   }
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);