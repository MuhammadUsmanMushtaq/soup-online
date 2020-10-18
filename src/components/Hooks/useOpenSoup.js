import { useState } from 'react';

export function useOpenSoup (){
    const [openSoup, setOpenSoup] = useState();
    return (
        {openSoup, setOpenSoup}
    );
}