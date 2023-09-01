import React from "react";

import { useRouter } from "next/router";

import moment from "moment/moment";

import { Box, Paper, Button } from "@mui/material";

import Form from "../modules/Form";

function CustomerEditPage({
  _id,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  postalCode,
  date,
  products,
}) {
  const [inputs, setInputs] = React.useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber || "",
    address: address || "",
    postalCode: postalCode || "",
    date: moment(date).utc().format("YYYY-MM-DD") || "",
    products: products || [],
  });

  const router = useRouter();

  const cancelHandler = () => {
    router.push("/");
  };

  const saveHandler = async () => {
    const res = await fetch(`/api/customer/edit/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(inputs),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") {
      router.push("/");
    } else {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <section>
      <Box component={Paper} p={2.5}>
        <Form inputs={inputs} setInputs={setInputs} />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Button
            sx={{ fontWeight: 700 }}
            variant="contained"
            color="error"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <Button
            sx={{ fontWeight: 700 }}
            variant="contained"
            color="success"
            onClick={saveHandler}
          >
            Save
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default CustomerEditPage;
