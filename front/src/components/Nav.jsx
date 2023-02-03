import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import styled from "styled-components";


const StyledNav = styled.div`
display: flex;
justify-content:space-around;
`
const StyledDiv = styled.div`
color: white;
border :solid 1px;
padding: 10px;
border-radius: 10px 40px 40px 10px
`

export default function NavBar({onSearch,logout}) {
    
    return (
        <StyledNav>
            <Link to={'/home'}><StyledDiv>Home</StyledDiv></Link>
            <Link to={'/favorites'}><StyledDiv>Favorites</StyledDiv></Link>
            <Link to={'/about'}><StyledDiv>About</StyledDiv></Link>
            <SearchBar onSearch={onSearch}/>
            <button onClick={logout}>SALIR</button>
        </StyledNav>
    )
 }

 