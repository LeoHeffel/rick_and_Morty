import styled from "styled-components";

const StyledCard= styled.div`
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
const H2= styled.h2`
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
font-weight: lighter;
`

export default function Card(props) {

   return (
      <StyledCard>
         <Button onClick={()=>props.onClose(props.id)}>X</Button>
         <Img  src={props.image} alt="" />
         <Name>{props.name}</Name>
         <Spec>
            <H2 >{props.species}</H2>
            <H2 >{props.gender}</H2>
         </Spec>
      </StyledCard>
   );
}
