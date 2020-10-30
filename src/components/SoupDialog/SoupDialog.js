import React from 'react';
import styled from 'styled-components';
import { SoupLabel } from '../Menu/SoupGrid';
import { soupGreen } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../SoupData/SoupData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';


export const Dialog = styled.div`
    width: 500px;
    background: white;
    position: fixed;
    border-radius: 12px;
    height: 80%;
    overflow-y: scroll;
    top: 75px;
    z-index: 300;
    // left:0;
    // right:0;
    // bottom:0;
    // max-height: calc(100% -100px);
    // overflow:scroll;
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
        left:0;
        right:0;
        bottom:0;
        height: 100%;
        top:0;
        border-radius: 0;
    }   
`;

export const DialogContent = styled.div`
    padding: 32px;
`;

export const DialogFooter = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    width: 200px;
    height: 20px;
    margin:48px auto;
    color: ${soupGreen};
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid ${soupGreen};
    text-align: center;
    cursor: pointer;
    &:hover{
         background-color: ${soupGreen};
         color: #FFF;
    }
`;    


export const DialogClose = styled.div`
    position: absolute;
    top:10px;
    right:10px;
    height: 20px;
    width: 20px;
    background-image: url(img/close.png);
    background-position: center;
    background-size: cover;
    opacity: .5;
    transition: opacity .2s;
    cursor:pointer;
       &:hover{
        opacity: 1;
    }
`;

export const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background: black;
    opacity: 0.7;
    z-index:200;
`;

const DialogBanner = styled.div`
    min-height: 300px;
    margin-bottom: 32px;
    ${({img}) => `background-image:url(${img});`}
    background-position: center;
    background-size:cover;
`;

const DialogBannerName = styled(SoupLabel)`
    top: 100px;
    font-size:30px;
    padding:4px 40px;
`;

export function getPrice(order){
    return order.quantity * order.price;

}

function SoupDialogContainer({ openSoup, setOpenSoup, setOrders, orders }) {   
    const quantity = useQuantity(openSoup && openSoup.quantity);
   


    function close() {
         setOpenSoup();
     }

const order = {
         ...openSoup,
         quantity: quantity.value

     }

function addToOrder(){
        setOrders([...orders, order]);
        close();
     }
    return (
          <>
            <DialogShadow onClick={close}/>
                <Dialog>
                    <DialogClose onClick={close}></DialogClose>
                   
                    <DialogContent>
                         <DialogBanner img={openSoup.img}>
                            <DialogBannerName>{openSoup.name}</DialogBannerName>
                    </DialogBanner>
                        <QuantityInput quantity={quantity}/>
                    </DialogContent>
                    <DialogFooter>
                        <ConfirmButton onClick={addToOrder}>
                            Add to order : {formatPrice(getPrice (order))}
                        </ConfirmButton>
                    </DialogFooter>
                </Dialog>
          </>   
         );
   }

export function SoupDialog (props){
       if(!props.openSoup) return null;
       return <SoupDialogContainer {...props}/>
   }
