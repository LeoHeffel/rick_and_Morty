import styled from "styled-components";

const Button = styled.button`
background: #64dd17;
color: white;
margin-left:20px;
padding: 5px;
font-weight: bold
`
const Input = styled.input`
border-radius: 5px;
padding: 5px
`

export default function SearchBar(props) {
   return (
      <div>
          <Input type='search' />
      <Button onClick={()=>props.onSearch("pepe")}>Agregar</Button> 
      </div>
   );
}
