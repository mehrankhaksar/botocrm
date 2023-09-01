import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Paper, Typography, Button } from "@mui/material";

function Customer({ _id, firstName, lastName, email }) {
  const router = useRouter();

  const deleteHandler = async (id) => {
    const res = await fetch(`/api/customer/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.status === "success") router.reload();
  };

  return (
    <Box component={Paper} p={2.5}>
      <Box
        component="div"
        sx={{
          display: { sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="div" mb={{ xs: 2.5, sm: 0 }}>
          <Typography component="h4" fontWeight={700}>
            {firstName} {lastName}
          </Typography>
          <Typography component="h4" fontWeight={700} color="primary">
            {email}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "start" },
            alignItems: "center",
          }}
        >
          <Link href={`/customer/${_id}`}>
            <Button variant="contained" color="info">
              Details
            </Button>
          </Link>
          <Link href={`/customer/edit-customer/${_id}`}>
            <Button
              sx={{ marginLeft: 1.5, marginRight: 1.5 }}
              variant="contained"
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteHandler(_id)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Customer;
