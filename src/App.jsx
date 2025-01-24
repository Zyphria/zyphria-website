import { Box, Fab, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import Typed from "typed.js";
import About from "./components/About";
import Cover from "./components/Cover";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Socials from "./components/Socials";

import Logo from "./assets/logo.png";
import Chatbot from "./components/Chatbot";
import Whitepaper from "./components/Whitepaper";

function App() {
  const [nikka, setShowNikka] = useState(false);
  const el = React.useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ZYPHRIA", ""],
      typeSpeed: 50,
      // loop: true,
      // loopCount: Infinity,
      backSpeed: 50,
      smartBackspace: true,
      onComplete: (self) => {
        setIsCompleted(true);
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      {isCompleted ? (
        <>
          <Navbar />
          <Cover />
          <Stack
            spacing={20}
            sx={{
              maxWidth: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Headline />
            <Whitepaper />
            <About />
            <Roadmap />
            <Socials />
            <Box sx={{ p: 5 }}>
              <Typography>Zyphria © 2025</Typography>
            </Box>

            <Box sx={{ position: "fixed", bottom: 10, right: 10 }}>
              {!nikka ? (
                <Fab
                  aria-label="add"
                  onClick={() => setShowNikka(true)}
                  sx={{
                    background: "#1e1e1e",
                    color: "#f1f1f1",
                    "&:hover": { background: "#3C3C46" },
                  }}
                >
                  <span className="material-symbols-outlined">robot</span>
                </Fab>
              ) : (
                <Chatbot />
              )}
            </Box>
          </Stack>
        </>
      ) : (
        <Stack
          spacing={5}
          sx={{
            height: "100dvh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Logo}
            width="100px"
            height="100px"
            style={{
              filter: "invert(100%)",
              zIndex: 2,
            }}
          />
          <Typography ref={el} variant="h2" textAlign="center" />
        </Stack>
      )}
    </>
  );
}

export default App;
