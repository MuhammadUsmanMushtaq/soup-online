import { useState } from 'react';

export function useOpenCheckout(){
    const [openCheckout, setOpenCheckout] = useState();
    return (
        {openCheckout, setOpenCheckout}
    );
}