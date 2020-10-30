import { useState } from 'react';

export function useOpenCart (){
    const [openCart, setOpenCart] = useState(false);
    return (
        {openCart, setOpenCart}
    );
}