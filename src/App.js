import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import { SoupDialog } from './components/SoupDialog/SoupDialog';
import { Order } from './components/Order/Order';
import { OrderDialog } from './components/Order/OrderDialog';
import { OrderCheckout } from './components/OrderCheckout/OrderCheckout';
import { useOpenSoup } from './components/Hooks/useOpenSoup';
import { useOpenCheckout } from './components/Hooks/useOpenCheckout';
import { useOpenCart } from './components/Hooks/useOpenCart';
import { useOrders } from './components/Hooks/useOrders';
import { useTitle } from './components/Hooks/useTitle';
import { useAuthentication } from './components/Hooks/useAuthentication';
import { useOrderDialog } from './components/Hooks/useOrderDialog';


function App() {
  const openSoup = useOpenSoup();
  const openCart = useOpenCart();
  const orders = useOrders();
  const openCheckout = useOpenCheckout();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({ ...openSoup, ...orders});
  return (
    <>
    <GlobalStyle />
    <SoupDialog {...openSoup} {...orders}/>
    <Navbar {...auth} {...orders} {...openCart}/>
    <OrderCheckout {...auth} {...orders} {...openCheckout} {...orderDialog}/>
    <Order {...auth} {...orders} {...openCart} {...openCheckout}/>
    <OrderDialog {...orderDialog} {...orders}/>
    <Banner />
    <Menu {...openSoup}/>
    </>
  );
}

export default App;
