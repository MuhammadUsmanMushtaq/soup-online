import React from 'react';
import styled from 'styled-components';
import { soupGreen } from '../Styles/colors';


const QuantityInputStyled = styled.input`
    font-size: 18px;
    text-align: center;
    border: none;
    outline: none;
    width: 20px;
`;

const IncrementContainer = styled.div`
    display: flex;
    height: 24px;
 `;

 const IncrementButton = styled.div`
    width: 22px;
    color: ${soupGreen};
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
    margin: 0 10px;
    border-radius:  6px;
    border: 1px solid ${soupGreen};
    ${({disabled})=>
    disabled && `opacity:0.5;
        pointer-events:none;`}
        &:hover {
            background-color: lightgreen;
        }
 `;
export function QuantityInput({quantity}) {
    return <IncrementContainer>
                <div>Quantity</div>
                <IncrementButton onClick={()=>{
                    quantity.setValue(quantity.value - 1 );
                }}
                disabled={quantity.value === 1}> - </IncrementButton>

                <QuantityInputStyled {...quantity}/>

                 <IncrementButton onClick={()=>{
                    quantity.setValue(quantity.value + 1 );
                }}> + </IncrementButton>
                
            </IncrementContainer>;
}

