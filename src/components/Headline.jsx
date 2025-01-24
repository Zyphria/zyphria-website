import { Stack, Typography } from "@mui/material";
import "../App.css";
import Logo from "../assets/logo.png";
import Layout from "./Layout";

import React from "react";
import Title from "./Title";

import { HEADLINE } from "../../zyphria-data";

function Headline() {
  const { TITLE, SUBTITLE, FEATURES } = HEADLINE;

  return (
    <Layout id="Home">
      <img
        className="logo logo-spin"
        src={Logo}
        width="10%"
        height="10%"
        style={{
          filter: "drop-shadow(0 0 100px rgb(0, 47, 255)) invert(100%)",
        }}
      />

      <Title titleVariant="h2" title={TITLE} subtitle={SUBTITLE} noGlow />
      <Stack direction="row" spacing={{ xs: 2, xl: 15, lg: 15 }}>
        {FEATURES.map(({ title, icon }) => (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <span class="material-symbols-outlined">{icon}</span>
            <Typography variant="body2">{title}</Typography>
          </Stack>
        ))}
      </Stack>
    </Layout>
  );
}

export default Headline;
