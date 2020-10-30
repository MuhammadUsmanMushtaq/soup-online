import React from "react";
import {Dialog, DialogContent, DialogShadow, DialogClose, ConfirmButton} from "../SoupDialog/SoupDialog";
import styled from 'styled-components';

export const DoneStatus = styled.div `
    background-image: url(img/done.jpg);
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    margin: 48px auto 16px;
`

export function OrderDialog ({openOrderDialog, setOpenOrderDialog, setOrders}) {
    return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
        <DialogClose onClick={() =>{
                    setOpenOrderDialog();
                    setOrders([]);
                    }}></DialogClose>
        <DoneStatus></DoneStatus>
        <DialogContent>
            <h2>Your order is on the way</h2>
            <p>We have emailed confirmation of your order! Thanks for choosing soup online </p>
        </DialogContent>
        <ConfirmButton onClick={() =>{
                    setOpenOrderDialog();
                    setOrders([]);
                    }}>I am still hungry!</ConfirmButton>
    </Dialog>
    </> : <div/>
}