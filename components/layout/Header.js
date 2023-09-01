import React from "react";

import Link from "next/link";

import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Typography component="h2" variant="h5" fontWeight={700}>
              BotoCRM
            </Typography>
          </Link>
          <Link href="/customer/add-customer">
            <Button
              sx={{ fontWeight: 700 }}
              variant="outlined"
              size="small"
              color="inherit"
            >
              Add Customer
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
