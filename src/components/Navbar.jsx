import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../assets/logo2.png";

function Navbar() {
  return (
    <AppBar color="" elevation={0}>
      <Toolbar
        sx={{ background: "transparent", width: "100%", background: "" }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "center", width: "100%", px: 20 }}
        >
          <div style={{ left: 0, bottom: 0, position: "absolute" }}>
            <Box sx={{ p: 1 }}>
              <img
                src={Logo}
                width="160"
                height="36"
                style={{ filter: "invert(100%)" }}
              />
            </Box>
          </div>
          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
            {["Home", "Whitepaper", "About", "Roadmap", "Contact"].map((e) => (
              <Button
                sx={{
                  color: "#FFF",
                  textTransform: "none",
                  textDecoration: "none",
                }}
                as="a"
                href={`#${e}`}
              >
                {e}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
