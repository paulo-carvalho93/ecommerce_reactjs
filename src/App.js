import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    if (data) setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    if (cart) setCart(cart);
  }

  const handleAddTocart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
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
            <Cart cart={cart} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
