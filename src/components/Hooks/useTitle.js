import { useEffect } from 'react';

export function useTitle ({openSoup, orders}){
    useEffect(()=> {
        if (openSoup){
            document.title = openSoup.name;
        }else {
            document.title = orders.length === 0 ? 'Whats for supper ?' : `[${orders.length}] Items in your cart`
        }
    });

}
