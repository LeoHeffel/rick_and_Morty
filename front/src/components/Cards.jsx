import Card from './Card.jsx';
import styled from 'styled-components';

const StyledCards = styled.div`
display: flex;
justify-content:space-around;
flex-wrap: wrap
`

export default function Cards(props) {
   const { characters } = props;
   return (
   <StyledCards>
      {characters.length?
      characters.map(personaje => <Card key={personaje.id}
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          image={personaje.image}
          status={personaje.status}
          origin={personaje.origin}
          onClose={props.onClose}

          id={personaje.id}
        />)
        :<h2>No has agregado personajes</h2>}
   </StyledCards>)
}

