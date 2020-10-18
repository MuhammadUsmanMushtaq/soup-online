import React from 'react';
import styled from 'styled-components';
import {soupGreen} from '../Styles/colors';
import {Title} from '../Styles/title';


const NavbarStyled = styled.div `
background-color: ${soupGreen};
padding: 12px;
position: fixed;
width: 100%;

`
const Logo= styled(Title)`
font-size: 28px;
color: white;
text-shadow: 1px 1px 4px #000;
text-align: center;

`



export  function Navbar (){ 
    return (  
        <NavbarStyled>
       <Logo>Soup Online</Logo>
        </NavbarStyled>
    );

}

