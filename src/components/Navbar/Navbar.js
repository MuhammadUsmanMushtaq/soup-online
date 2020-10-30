import React from 'react';
import styled from 'styled-components';
import {Title} from '../Styles/title';


const NavbarStyled = styled.div `
    padding: 12px;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    z-index: 100;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);
`;

const Logo= styled(Title)`
    font-size: 40px;
    color: green;
`;

const UserStatus = styled.div `
    font-size: 18px;
    margin-right: 16px;
    color: #000;
    flex: 1;
    text-align: right;
`;

const LoginButton = styled.span`
    cursor: pointer;
`;

const Cart = styled.div`
    cursor: pointer;
    background-image: url(img/shopping-cart.png);
    background-position: center;
    background-size: cover; 
    background-repeat: no-repeat;
    display: inline-block;
    width:32px;
    height:32px;
    margin-right: 32px;
    position: relative;
`;


const NumberOfItems = styled.div`
   position: absolute;
   right: -8px;
   top: -10px;
   background-color: darkgreen;
   color: #fff;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   text-align: center;
   line-height: 20px;
   font-size: 10px;
`;


export  function Navbar ({login, loggedIn,logout, orders, openCart, setOpenCart}){ 

    function openOrders() {
         setOpenCart(!openCart);
     }

    return (  
        <NavbarStyled>
       <Logo>Soup shop</Logo>
       <UserStatus>
           {loggedIn ? (<LoginButton onClick={logout}>Logout</LoginButton>) :
            (<LoginButton onClick={login}>Login</LoginButton>)}
           </UserStatus>
            <Cart onClick={openOrders}>{orders.length ? <NumberOfItems>{orders.length}</NumberOfItems> : <div></div>}
            </Cart> 
        </NavbarStyled>
    );

}

