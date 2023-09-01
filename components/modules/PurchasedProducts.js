import React from "react";

import { Box, Paper, Typography, Grid, Button } from "@mui/material";

import InputElement from "../elements/InputElement";

function PurchasedProducts({ inputs, setInputs }) {
  const { products } = inputs;

  const changeHandler = (e, index) => {
    const { name, value } = e.target;

    const newProducts = [...products];
    newProducts[index][name] = value;

    setInputs({ ...inputs, products: newProducts });
  };

  const removeHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);

    setInputs({ ...inputs, products: newProducts });
  };

  const addHandler = () => {
    setInputs({
      ...inputs,
      products: [...products, { productName: "", price: "", quantity: 1 }],
    });
  };

  return (
    <Box component={Paper} p={2.5}>
      <Typography component="h3" variant="h6" fontWeight={700} mb={2.5}>
        Purchased Products
      </Typography>
      <Grid container spacing={1.5}>
        {products.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box component={Paper} p={2.5}>
              <Grid container spacing={2.5}>
                <Grid item xs={12}>
                  <InputElement
                    label="Product Name"
                    type="text"
                    name="productName"
                    value={item.productName}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputElement
                    label="Price"
                    type="text"
                    name="price"
                    value={item.price}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputElement
                    label="Quantity"
                    shrink={true}
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="error"
                    onClick={() => removeHandler(index)}
                  >
                    Remove Product
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ mt: 2.5 }}
        fullWidth
        variant="outlined"
        color="success"
        onClick={addHandler}
      >
        Add Product
      </Button>
    </Box>
  );
}

export default PurchasedProducts;
