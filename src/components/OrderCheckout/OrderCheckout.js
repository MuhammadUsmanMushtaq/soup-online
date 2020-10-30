import React from 'react';
import styled from 'styled-components';
import {DialogShadow, Dialog, DialogContent,DialogClose, ConfirmButton } from '../SoupDialog/SoupDialog';
import { formatPrice } from '../SoupData/SoupData';
import { getPrice } from '../SoupDialog/SoupDialog';


const OrderContent = styled(DialogContent)`
    padding: 20px;
    text-align: left;
`;

const OrderContainer = styled.div`
    padding: 48px 16px;
    border: 1px solid #ddd;
    margin-bottom: 32px;
    text-align: left;
`;

const OrderItem = styled.div`
    padding: 8px 0;
    display: grid;
    grid-template-columns: 20px 160px 20px 60px;
    justify-content: space-between; 
`;

const DeliveryInstructionsContainer = styled.div`
    padding: 16px 0px;
     text-align: left;
`;

const FormInput = styled.input`
    font-size: 14px;
    font-weight: 300;
    border-radius: 10px;
    transition: all 150ms;
    display: block;
    width: 100%;
    position: relative;
    z-index: 1;
    line-height: 1em;
    padding: 12px 15px;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    background-color: #fff;
    color: #333;
    font-weight: 300;
    resize: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 20px 0;
`;

const PaymentContainer = styled.div`
    border: 1px solid # ddd;
    padding: 16px 0px;
     text-align: left;
`;

const PaymentOptions = styled.div`
    display:flex;
`;

const PaymentOptionSelected = styled.div`
    border: 1px solid green;
    border-radius: 10px;
    padding: 48px; 
    margin-right: 24px;
`;


const PaymentOption = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 48px; 
    margin-right: 24px;
`;


export function OrderCheckout({orders, setOrders,loggedIn,login ,openCheckout, setOpenCheckout, setOpenOrderDialog}){
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

    return (
openCheckout ? <>
  <DialogShadow/>
<Dialog>
       <DialogClose onClick={() =>{
                    setOpenCheckout();
                    }}></DialogClose>
        <OrderContent> 
            <h2>Your Order</h2>
            {orders.map ((order, index) => (
                <OrderContainer>
                    <OrderItem>
                        <div>{order.quantity}</div>
                        <div>{order.name}</div> 
                        <div style={{cursor:'pointer'}} onClick={()=> {deletItem(index)}}>X</div>
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

            <DeliveryInstructionsContainer>

            <h2>Delivery Instructions</h2>
            <FormInput placeholder="Name"></FormInput>
            <FormInput placeholder="Address"></FormInput>
            <FormInput placeholder="Phone Number"></FormInput>
            </DeliveryInstructionsContainer>

            <PaymentContainer>
            <h2>Payment</h2>
            <PaymentOptions>
                <PaymentOptionSelected>
                    KLARNA
                </PaymentOptionSelected>
                    <PaymentOption>
                    SWISH
                </PaymentOption>
            </PaymentOptions>
            </PaymentContainer>
            <ConfirmButton onClick={() =>{
                                if(loggedIn) {
                                    console.log('logged in');
                                    setOpenOrderDialog(true);
                                    setOpenCheckout();
                                } else {
                                    login();
                                }
                            }} >Place Order</ConfirmButton>
            
        </OrderContent>
        </Dialog>
        </>
: <div/>
);
}