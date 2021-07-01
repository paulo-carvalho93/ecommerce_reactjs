import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { 
    id: 1, 
    name: 'DualSense ', 
    description: 'Joystick Controller', 
    price: '$70',
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-hero-ps5-02-en-02jul20?$native$'
  },
  { 
    id: 2, 
    name: 'Playstation 5', 
    description: 'Sony videogame', 
    price: '$399',
    image: 'https://sm.ign.com/ign_br/screenshot/default/blob_31ja.jpg'
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
          ))}
      </Grid>
    </main>
  );
}

export default Products