import React from "react";

import { Box, Paper, Typography, Grid } from "@mui/material";

import Customer from "../modules/Customer";

function HomePage({ customers }) {
  return (
    <section>
      <Box component={Paper} p={2.5}>
        <Typography component="h3" variant="h5" fontWeight={700} mb={1.5}>
          Customers
        </Typography>
        <Grid container spacing={1.5}>
          {customers.map((item) => (
            <Grid item xs={12} key={item._id}>
              <Customer {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default HomePage;
