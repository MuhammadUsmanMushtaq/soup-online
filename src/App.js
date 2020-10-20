import React, { useState} from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import { SoupDialog } from './components/SoupDialog/SoupDialog';
import { Order } from './components/Order/Order';
import { useOpenSoup } from './components/Hooks/useOpenSoup';
import { useOrders } from './components/Hooks/useOrders';
import { useTitle } from './components/Hooks/useTitle';




function App() {
  const openSoup = useOpenSoup();
  const orders = useOrders();
  useTitle({ ...openSoup, ...orders});
  return (
    <>
    <GlobalStyle />
    <SoupDialog {...openSoup} {...orders}/>
    <Navbar />
    <Order {...orders} />
    <Banner />
    <Menu {...openSoup}/>
    </>
  );
}

export default App;
