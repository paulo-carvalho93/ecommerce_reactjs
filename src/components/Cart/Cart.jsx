import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid,
  Container,
  Typography,
  Button
} from '@material-ui/core';
import CardItem from './CartItem/CartItem';

import useStyles from './styles';

const Cart = ({ 
  cart, 
  handleUpdateCartQty, 
  handleRemoveItemFromCart, 
  handleEmptyCart 
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Oops! You don't have items in your shopping cart yet!
        <Link to="/" className={classes.link}>Do some shopping!</Link>
    </Typography>
  );

  const filledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem 
              item={item} 
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveItemFromCart={handleRemoveItemFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button 
              className={classes.emptyButton} 
              size="large" 
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button 
              component={Link}
              to="/checkout"
              className={classes.checkoutButton} 
              size="large" 
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
