import React from "react";

import { Box, Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Header />
      <Box component="main" sx={{ width: "100%", flex: 1, my: 3 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
