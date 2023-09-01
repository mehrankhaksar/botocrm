import React from "react";

import { TextField } from "@mui/material";

function InputElement({ label, shrink, type, name, value, onChange }) {
  return (
    <TextField
      fullWidth
      label={label}
      InputLabelProps={{
        shrink: shrink,
      }}
      type={type}
      InputProps={{
        inputProps: { min: 1 },
      }}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputElement;
