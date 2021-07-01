import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Grid,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Typography
} from '@material-ui/core';

import FormInput from '../FormInput/FormInput';

const AddressForm = () => {
  const methods = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCounttry, setShippingCounttry] = useState('');;
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');



  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider { ...methods}>
        <form onSubmit={}>
          <Grid container spacing={3}>
            <FormInput required name={firstName} label='First name' />
            <FormInput required name={lastName} label='Last name' />
            <FormInput required name={address1} label='Address' />
            <FormInput required name={email} label='E-mail' />
            <FormInput required name={city} label='City' />
            <FormInput required name={ZIP} label='ZIP / Postal Code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select 
                value={}
                fullWidth
                onChange={}
              >
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select 
                value={}
                fullWidth
                onChange={}
              >
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select 
                value={}
                fullWidth
                onChange={}
              >
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm
