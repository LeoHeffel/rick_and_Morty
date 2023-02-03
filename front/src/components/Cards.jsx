import Card from './Card.jsx';
import styled from 'styled-components';
/* import { addFavorite, removeFavorite } from "../redux/actions.js";
import { connect } from 'react-redux'; */
const StyledCards = styled.div`
display: flex;
justify-content:space-around;
`

export default function Cards(props) {
   const { characters } = props;
   return (
   <StyledCards>
      {characters.map(personaje => <Card key={personaje.id}
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          image={personaje.image}
          onClose={props.onClose}

          id={personaje.id}
        />)}
   </StyledCards>)
}

