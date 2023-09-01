import React from "react";

import { Grid } from "@mui/material";

import InputElement from "../elements/InputElement";
import PurchasedProducts from "./PurchasedProducts";

function Form({ inputs, setInputs }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="First Name"
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="Last Name"
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="Email"
          type="email"
          name="email"
          value={inputs.email}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={inputs.phoneNumber}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="Address"
          type="text"
          name="address"
          value={inputs.address}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          label="Postal Code"
          type="text"
          name="postalCode"
          value={inputs.postalCode}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputElement
          type="date"
          name="date"
          value={inputs.date}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <PurchasedProducts inputs={inputs} setInputs={setInputs} />
      </Grid>
    </Grid>
  );
}

export default Form;
