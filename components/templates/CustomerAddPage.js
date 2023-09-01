import React from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { Box, Paper, Button } from "@mui/material";

import Form from "../modules/Form";

function CustomerAddPage() {
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
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

  const cancelHandler = () => {
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      date: "",
    });
    router.push("/");
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

export default CustomerAddPage;
