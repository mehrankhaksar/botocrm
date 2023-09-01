import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import moment from "moment";

import {
  Box,
  Paper,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

function CustomerDetailsPage({
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
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/customer/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.status === "success") router.push("/");
  };

  return (
    <section>
      <Box component={Paper} mb={2.5} p={2.5}>
        <Grid container spacing={1.5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              First Name:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {firstName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Last Name:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {lastName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Email:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Phone Number:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {phoneNumber}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Address:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {address}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Postal Code:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {postalCode}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ fontWeight: 700, color: "primary.main" }}>
              Date:
              <Typography
                component="span"
                fontWeight={500}
                color="black"
                ml={0.5}
              >
                {date ? moment(date).utc().format("YYYY-MM-DD") : ""}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TableContainer component={Paper} sx={{ mb: 2.5 }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component={Paper} p={2.5}>
        <Typography component="h3" variant="h6" fontWeight={700} mb={2.5}>
          Edit or Delete?
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Button
              sx={{ fontWeight: 700 }}
              fullWidth
              variant="contained"
              color="error"
              onClick={deleteHandler}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href={`/customer/edit-customer/${_id}`}>
              <Button
                sx={{ fontWeight: 700 }}
                fullWidth
                variant="contained"
                color="success"
              >
                Edit
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default CustomerDetailsPage;
