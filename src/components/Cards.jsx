import Card from './Card';
import styled from 'styled-components';

const StyledCards = styled.div`
display: flex;
justify-content:space-around;
`

export default function Cards(props) {
   const { characters } = props;
   return (
   <StyledCards>
      {characters.map(personaje => <Card
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          image={personaje.image}
          onClose={props.onClose}
          id={personaje.id}
        />)}
   </StyledCards>)
}
