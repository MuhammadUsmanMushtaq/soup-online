import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../SoupDialog/SoupDialog';
import { formatPrice } from '../SoupData/SoupData';
import { getPrice } from '../SoupDialog/SoupDialog';

const OrderStyled = styled.div`
    position: fixed;
    right: 0;
    top: 60px;
    width: 340px;
    height: calc(100% - 60px);
    background-color: white;
    box-shadow: 4px 0 5px 4px gray;
    z-index: 10;
     display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
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


export function Order({orders}){
    const subtotal = orders.reduce((total, order)=> {
        return total + getPrice(order);
    }, 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    return (
           <OrderStyled>
                 {orders.length === 0 ? (
                 <OrderContent>your cart looking empty.</OrderContent>
                 ) : (
                 <OrderContent> 
                     <OrderContainer>Your order: </OrderContainer> {''}
                     {orders.map (order => (
                         <OrderContainer>
                             <OrderItem>
                                 <div>{order.quantity}</div>
                                 <div>{order.name}</div> 
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
                            <ConfirmButton>Checkout</ConfirmButton>
               </DialogFooter>
           </OrderStyled>
    );
}