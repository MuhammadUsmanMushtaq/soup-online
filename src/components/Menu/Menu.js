import React from 'react';
import styled from 'styled-components';
import { soups} from '../SoupData/SoupData';
import { Soup, SoupGrid, SoupLabel } from './SoupGrid';
import { formatPrice } from '../SoupData/SoupData';


const MenuStyled = styled.div`
        margin:0 400px 50px 20px;
        height: 1000px;
`;

export function Menu ({setOpenSoup}){
    return (
        <MenuStyled>
            {Object.entries(soups).map(([sectionName, soups])=>
            <>
            <h1>{sectionName}</h1>
            <SoupGrid>
                {soups.map(soup=> (
                <Soup img={soup.img} onClick={()=>{
                    setOpenSoup(soup);
                }}>
                    <SoupLabel>
                        <div>{soup.name}</div>
                        <div>{formatPrice(soup.price)}</div>
                    </SoupLabel>
                </Soup>
            ))}
            </SoupGrid>
            </>
            )}
            
        </MenuStyled>
    );
} 