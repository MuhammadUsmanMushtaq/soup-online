import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton, DialogClose } from '../SoupDialog/SoupDialog';
import { formatPrice } from '../SoupData/SoupData';
import { getPrice } from '../SoupDialog/SoupDialog';

const OrderStyled = styled.div`
    position: fixed;
    right: 0;
    top: 70px;
    width: 340px;
    height: calc(100% - 60px);
    background-color: white;
    box-shadow: 4px 0 5px 4px gray;
    z-index: 10;
     display: flex;
    flex-direction: column;
       @media (max-width: 768px) {
        width: 100%;
        left:0;
        right:0;
        bottom:0;
        height: 100%;
        top:0;
        z-index: 200;
    }   
`;

export const OrderDelete = styled.div`
    height: 20px;
    width: 20px;
    background-image: url(img/round-delete-button.png);
    background-position: center;
    background-size: cover;
    opacity: .5;
    transition: opacity .2s;
    cursor:pointer;
       &:hover{
        opacity: 1;
    }
`;


const OrderContent = styled(DialogContent)`
    padding: 20px;
`;

const OrderContainer = styled.div`
    padding: 8px 0;
    border-bottom: 1px solid gray;
`;

const OrderItem = styled.div`
    padding: 8px 0;
    display: grid;
    grid-template-columns: 20px 160px 20px 60px;
    justify-content: space-between; 
`;


export function Order({orders, setOrders, openCart,setOpenCart, loggedIn, login, setOpenCheckout}){
    const subtotal = orders.reduce((total, order)=> {
        return total + getPrice(order);
    }, 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    const deletItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    if(!openCart) return null;

    return (
 
       <OrderStyled>
           <DialogClose onClick={() =>{
                                    setOpenCart();                          
                            }} ></DialogClose>
                 {orders.length === 0 ? (
                 <OrderContent>your cart looking empty.</OrderContent>
                 ) : (
                 <OrderContent> 
                     <OrderContainer>Your order: </OrderContainer>
                     {orders.map ((order, index) => (
                         <OrderContainer>
                             <OrderItem>
                                 <div>{order.quantity}</div>
                                 <div>{order.name}</div> 
                                  <OrderDelete style={{cursor:'pointer'}} onClick={()=> {deletItem(index)}}></OrderDelete>
                                 <div>{formatPrice(getPrice(order))}</div>
                                
                            </OrderItem>
                         </OrderContainer>
                     ))}
                     <OrderContainer>
                         <OrderItem>
                             <div />
                             <div>Sub-total</div>
                             <div>{formatPrice(subtotal)}</div>
                         </OrderItem>
                         <OrderItem>
                             <div />
                             <div>Tax</div>
                             <div>{formatPrice(tax)}</div>
                         </OrderItem>
                         <OrderItem>
                             <div />
                             <div>Total</div>
                             <div>{formatPrice(total)}</div>
                         </OrderItem>

                     </OrderContainer>
                </OrderContent>
                 )}
                 
               <DialogFooter>
                      {orders.length>0 && <ConfirmButton onClick={() =>{
                                if(loggedIn) {
                                    setOpenCheckout(true);
                                    setOpenCart();
                                    console.log('logged in')
                                } else {
                                    login();
                                    setOpenCheckout(true);
                                     setOpenCart();
                                }
                            }} >Checkout</ConfirmButton>}  
               </DialogFooter>
           </OrderStyled> 
    );
}