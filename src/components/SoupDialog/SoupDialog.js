import React from 'react';
import styled from 'styled-components';
import { SoupLabel } from '../Menu/SoupGrid';
import { soupGreen } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../SoupData/SoupData';


const Dialog = styled.div`
    width: 500px;
    background: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% -100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    `;
export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    `;

export const DialogFooter = styled.div`
    box-shadow: 0 2px 20px 0 gray;
    height: 60px;
    display: flex;
    justify-content: center;
    `;
export const ConfirmButton = styled(Title)`
    width: 200px;
    height: 20px;
    margin:8px 0;
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

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background: black;
    opacity: 0.7;
    z-index:4;
`;
const DialogBanner = styled.div`
    min-height: 200px;
    margin: 20px;
    ${({img}) => `background-image:url(${img});`}
    background-position: center;
    background-size:cover;
`;
const DialogBannerName = styled(SoupLabel)`
    top: 100px;
    font-size:30px;
    padding:4px 40px;
`;

 export function SoupDialog({ openSoup, setOpenSoup, setOrders, orders }) {
     function close() {
         setOpenSoup();
     }
     if (!openSoup) return null;

     const order = {
         ...openSoup
     }

     function addToOrder(){
        setOrders([...orders, order]);
        close();
     }
    return (
          <>
            <DialogShadow onClick={close}/>
                <Dialog>
                    <DialogBanner img={openSoup.img}>
                            <DialogBannerName>{openSoup.name}</DialogBannerName>
                    </DialogBanner>
                    <DialogContent />
                    <DialogFooter>
                        <ConfirmButton onClick={addToOrder}>
                            Add to order : {formatPrice(openSoup.price)}
                        </ConfirmButton>
                    </DialogFooter>
                </Dialog>
          </>   
         );
   }

