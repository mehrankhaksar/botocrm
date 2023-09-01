import React from "react";

import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ width: "100%", bgcolor: "grey.300" }}>
      <Typography
        component="p"
        variant="p"
        fontSize={12}
        fontWeight={500}
        textAlign="center"
        py={1}
      >
        <Link
          href="https://botostart.ir/"
          target="_blank"
          rel="noreferrer"
          fontWeight={700}
          color="primary"
          underline="none"
          mr={0.5}
        >
          Botostart
        </Link>
        Next.JS Course | BotoCRM Project &copy;
      </Typography>
    </Box>
  );
}

export default Footer;
