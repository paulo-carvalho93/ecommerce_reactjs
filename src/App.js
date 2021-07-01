import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';
import { Navbar, Products, Cart, Checkout } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    if (data) setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    if (cart) setCart(cart);
  }

  const handleAddTocart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveItemFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }
  
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddTocart}/>
          </Route>
          <Route path="/cart">
            <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout 
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage} 
            />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
